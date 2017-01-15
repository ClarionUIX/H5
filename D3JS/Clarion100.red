-- Default Redirection for Clarion 10.0

[Copy]
-- Directories only used when copying dlls
*.dll = %BIN%;%BIN%\AddIns\BackendBindings\ClarionBinding\Common;%ROOT%\Accessory\bin;%libpath%\bin\%configuration%

[Debug]
-- Directories only used when building with Debug configuration

*.obj = obj\debug
*.res = obj\debug
*.rsc = obj\debug
*.lib = obj\debug
*.FileList.xml = obj\debug
*.map = map\debug

[Release]
-- Directories only used when building with Release configuration

*.obj = obj\release
*.res = obj\release
*.rsc = obj\release
*.lib = obj\release
*.FileList.xml = obj\release
*.map = map\release

[Common]
*.chm = %BIN%;%ROOT%\Accessory\bin
*.tp? = %ROOT%\template\win
*.trf = %ROOT%\template\win
*.txs = %ROOT%\template\win
*.stt = %ROOT%\template\win
*.*   = .; %ROOT%\libsrc\win; %ROOT%\images; %ROOT%\template\win
*.lib = %ROOT%\lib
*.obj = %ROOT%\lib
*.res = %ROOT%\lib
*.hlp = %BIN%;%ROOT%\Accessory\bin
*.dll = %BIN%;%ROOT%\Accessory\bin
*.exe = %BIN%;%ROOT%\Accessory\bin
*.tp? = %ROOT%\Accessory\template\win
*.txs = %ROOT%\Accessory\template\win
*.stt = %ROOT%\Accessory\template\win
*.lib = %ROOT%\Accessory\lib
*.obj = %ROOT%\Accessory\lib
*.res = %ROOT%\Accessory\lib
*.dll = %ROOT%\Accessory\bin
*.*   = %ROOT%\Accessory\images; %ROOT%\Accessory\resources; %ROOT%\Accessory\libsrc\win; %ROOT%\Accessory\template\win; .\Buttons; .\InputFields; .\Splash; .\Wallpapers; .\Resources; .\Extras; .\Panels
