/// Contains various helpers to be used across scripts
[<AutoOpen>]
module Helpers =
    open System
    open System.ComponentModel
    open System.Diagnostics
    open System.IO
    open System.IO.Compression
    open System.Linq
    open System.Text.RegularExpressions
    

    let (<!!>) (path1 : string) (path2 : string) = Path.Combine([| path1; path2 |])
    let loopDir (dir : string) = Directory.EnumerateDirectories(dir)
    let loopFiles (dir : string) = Directory.EnumerateFiles(dir)
    let createDir (dir : string) = Directory.CreateDirectory(dir) |> ignore
    
    let emptyDir (dir : string) = 
        if Directory.Exists(dir) then
            loopDir dir |> Seq.iter (fun x -> Directory.Delete(x, true))
            loopFiles dir |> Seq.iter (fun x -> File.Delete(x))
    
    let (!>) (content : string) = printfn "[INFO] %s" content |> ignore
    let (!>>) (content : string) = printfn "\t%s" content |> ignore
    let brk() = !>"------------------------------------------------------------------------"
    let printPath (name : string) (content : string) = 
        !>> (sprintf "%s: %s" name content)
        content
    let ensureDir (dir : string) = createDir dir; dir
    let copyFiles (sourceDir : string) (targetDir : string) =
        ensureDir (targetDir) |> ignore

        loopFiles sourceDir
        |> Seq.iter (fun fileSrc -> 
            let fileName = (new FileInfo(fileSrc)).Name
            File.Copy(fileSrc, targetDir <!!> fileName))

    let copyDir (sourceDir : string) (targetDir : string) =
        let sourceDirName = (new DirectoryInfo(sourceDir)).Name
        ensureDir (targetDir <!!> sourceDirName) |> ignore
        
        copyFiles sourceDir (targetDir <!!> sourceDirName)

    brk()
    !> "FlexSearch Build Variables"
    brk()
    let scriptDir = __SOURCE_DIRECTORY__ |> printPath "Scripts Directory"
    let rootDir = Directory.GetParent(scriptDir).FullName |> Directory.GetParent |> fun d -> d.FullName |> printPath "Root Directory"
    let srcDir = rootDir <!!> "src" |> printPath "Source Code Directory"
    let specDir = rootDir <!!> "spec" |> printPath "Specs Directory"
    let toolsDir = rootDir <!!> "lib" |> printPath "Tools Directory"
    let buildDir = rootDir <!!> "build" |> printPath "Build Directory"
    let portalBuildDir = rootDir <!!> "build-portal" |> printPath "Portal Build Directory"
    let debugDir = rootDir <!!> "build-debug" |> printPath "Debug Directory"
    let testDir = rootDir <!!> "build-test" |> printPath "Test Directory"
    let deployDir = rootDir <!!> "deploy" |> printPath "Deploy Directory"
    let portalDir = rootDir <!!> "srcjs" |> printPath "Portal Directory"
    let basePortalDir = rootDir <!!> "lib/srcjs" |> printPath "Base Portal Directory"
    let webDir = buildDir <!!> "Web" |> printPath "Web Directory"

    let javaHome = Environment.GetEnvironmentVariable("JAVA_HOME") |> printPath "JAVA HOME"


    /// Execute a file from the path with the provided reference
    let exec(path, argument) = 
        let psi = new ProcessStartInfo()
        psi.FileName <- path
        psi.Arguments <- argument
        psi.WorkingDirectory <- __SOURCE_DIRECTORY__
        psi.RedirectStandardOutput <- false
        psi.UseShellExecute <- false
        use p = Process.Start(psi)
        p.WaitForExit()
    
    let javaExec (args : string) = exec(javaHome <!!> @"bin\java.exe", args)

    brk()