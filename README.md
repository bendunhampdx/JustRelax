<p align="center">
<img src="JustRelax/wwwroot/assets/lofiGirl.png" width="550" style="border-radius=50%;" /><br/><br />
<big>Just Relax</big>
</p>
<p align="center">
<i>Ben Dunham, Chynna Lew, Diego Serafico, Kevin Funez, Melissa Scmi</i>
<br/>

------------------------------

<br/>
Welcome to Codis Somnum.
<br /><br />
This program is designed for those who have little to no experience with programming, so remember that it's normal to feel lost...<br/><br />

------------------------------

<br/>

### Technologies Used

<br />

* _C#_


<br />
<br />

<p align="center">
<big>Setup & Use</big>
</p>
<br />

#### Prerequisites

- [.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
- A text editor like [VS Code](https://code.visualstudio.com/)
- A command line interface like Terminal or GitBash
- [MySql](https://dev.mysql.com/downloads/file/?id=484914) & [MySql Workbench](https://www.mysql.com/products/workbench/)

<br/>

#### Setup/Installation

* Clone [this repository](https://github.com/tigertiger/JustRelax) to an empty folder or to your desktop, or download and open the Zip on your machine. Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
* Open the ```JustRelax``` folder in your preferred text editor
* Set up a SQL database:
   - Create a new `appsettings.json` file in ```JustRelax```
   - Copy the following code into that file, replacing `YOUR_PASSWORD` with your MySQL password:
   ```
        "Logging": {
         "LogLevel": {
           "Default": "Warning",
           "System": "Information",
           "Microsoft": "Information"
         }
      },
     {
        "ConnectionStrings": {
           "DefaultConnection": "Server=localhost;Port=3306;database=just_relax;uid=root;pwd=YOUR_PASSWORD;"
         }
     }
   ```
* This repo includes database Migrations. To make use of those, simply run ```dotnet ef database update``` in your ```JustRelax``` directory.

* Restore and build the project:
  - Navigate to the ```JustRelax``` folder in the command line or terminal  
    -- Run ```dotnet restore``` to restore the project dependencies  
    -- Run ```dotnet build``` to build and compile the project

* Play the Game:
  - Navigate to the ```JustRelax``` folder in the terminal
  - Run ```dotnet run``` 
  - If you would like to be able to continue viewing the site while making changes, instead run ```dotnet watch run```
  - Access http://localhost:5000 in your web browser
  - Good luck in there...

<br />
<br />

### Known Issues
* _Using the [Enter] key on character creation inputs skips the rest of character creation_

<br />

### License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Ben Dunham, Chynna Lew, Diego Serafico, Kevin Funez, Melissa Schatz-Miller_

<Br />

### Creators  

[Ben Dunham](https://github.com/bendunhampdx)  
[Chynna Lew](https://github.com/chynnalew)  
[Diego Serafico](https://github.com/DiegoSerafico)   
[Kevin Funez](https://github.com/KevinFunez5)  
[Melissa Schatz-Miller](https://github.com/tigertiger)  <br ><br />
_Please feel free to reach out to us with suggested changes/improvements, or if you have any questions._