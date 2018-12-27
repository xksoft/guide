---
pageClass: use-page
sidebarDepth: 2
---
# Installation Tutorial

## Precondition

* **XiakeCloud Authorized account:**
You need to go to [Official Website] (https://www.xky.com/) to register an official XiakeCloud account. After purchasing the corresponding software, the customer service will open the relevant software license for your account.
* **XiakeCloud node server:**
The XiakeCloud node server is a service system customized for XiakeCloud. You will be given a certain number of servers when you purchase the software (if you need more node servers, you can contact customer service to purchase).
* **Computer:**
Support Windows (win7 64-bit, win10 64-bit), macOS, Linux, configuration requirements not less than I5 CPU, 8G memory, display size is recommended to be greater than 24 inches.
* **Mobile phone**
The mobile phone requirements are Android 5.0 or above.The device recommends the official Xiakecloud machine, which can achieve more functions with Xiakecloud.
* **Mobile phone stand:**
Purchase a mobile phone holder of the corresponding size based on the number of mobile devices.

## Hardware

![硬件](/img/1.png)

* The mobile device needs to enable USB debugging; the new phone hides the "developer option" and turns off the "USB debugging" mode by default. We need to open it manually, as follows:
  Settings - About the phone - version number (continuous click 6-7, the screen will prompt to launch the developer option) - Back - Developer Options - Open (developer options) - On (Android debugging / USB debugging).
>Note: There are differences in the way the USB is turned on. For example, if the above method cannot be implemented, please search for it yourself.

* The node server is connected to the same router through the network cable and the control computer, and all mobile devices are connected to the server through a hub (USBHub).
> Note: The hub generally has a power cable and a data cable. The data cable is plugged into the server to transmit the mobile phone data. The power cable is plugged into the power strip to supply power to the mobile phone. When the mobile phone is first accessed, it will prompt “Whether to allow USB debugging. ", we need to click "Allow All".

## software
* **XiakeCloud software: ** [download] (https://dl.xky.com/88/index.html)

&emsp;&emsp;Double-click to open the downloaded installation package for software installation. At this time, the computer may display a series of prompts. You need to click `Yes` or `OK`. Wait for the installation of XiakeCloud, the desktop will generate a "XiakeCloud" quick start icon, you can click the startup program to reach the software login interface (as shown below), enter your account password and click Login.
![[侠客云](/img/2.png)

## Add device

&emsp;&emsp;After the successful software login, the device list is blank and there is no mobile device (as shown below).

![连接设备](/img/3.png)

&emsp;&emsp;Click the menu `Node Detector` on the left side of the XiakeCloud client. If no node server is found, please check if the server is normally turned on and the network is normal. If everything is normal, the details of the node server will be included, including the machine name and serial number. Intranet IP, access address, and then click the Copy button to copy the serial number to the clipboard.

![侠客云节点探测工具](/img/4.png)

&emsp;&emsp;Click on the menu `Node Server` on the left side of the XiakeCloud client and click on `Add Node`.

![节点服务器](/img/5.png)

&emsp;&emsp;Paste the serial number you just copied, set the server name (because the software can connect to multiple servers, set the name to distinguish), click `Add node` after setting.

![添加节点服务器](/img/6.png)

&emsp;&emsp; After the add node server is set up, the connected mobile device will appear on the client.

![添加节点服务器完成](/img/7.png)

>**note:** The small dot in front of the server name is the server status point, green is the normal state, if it is gray, it is not connected. Please check if the server is booting normally and the network is normal.

5. 	After the node server is added successfully, you can view the server details by accessing the node server details page (address view step 1).

![连接详细信息](/img/8.png)

At this point, our software has been installed and we can start using the software.

## Menu introduction

![软件主界面](/img/9.png)

### My device
&emsp;&emsp;This shows all connected devices, including online and offline devices. There is a status point under the device. The green is the device is online, the gray is the device has been dropped, the yellow is the device is executing the script, the selected device can be clicked the right mouse button Edit the device, set the device to debug the machine, and get the debugging code of the device. Click the device to enter the script execution interface, where you can also execute the group control mode.

### Module market
&emsp;&emsp;This shows all connected devices, including online and offline devices. There is a status point under the device. Green indicates that the device is online, gray indicates that the device has been dropped, yellow indicates that the device is executing the script, and the selected device can click the right mouse button. Edit the device, set the device to debug the machine, and get the debugging code of the device. Click the device to enter the script execution interface, where you can also execute the group control mode.

### My module
&emsp;&emsp;This shows all the module scripts you have purchased. If you purchase the development version of XiakeCloud, you can create a new module script yourself, or even you can publish it to the module market for sale. All the scripts you have written will be displayed here.

### Node server
&emsp;&emsp;This shows all the server information that has been connected to your account, including online and offline. The green status point is normal and the gray status is offline.

### File manager
&emsp;&emsp;Here is your private cloud disk. All the files that XiakeCloud needs to use include pictures, videos, installation packages, etc. You can upload them to the cloud disk for management here.

### Sub-control management
&emsp;&emsp;Here is the interface for managing your sub-control account and mobile device assignments.

### Global positioning management
&emsp;&emsp;Here is the location of all XiakeCloud machines, you can drag the location of the XiakeCloud machine directly on the map, only owned by the XiakeCloud machine, other mobile devices do not support this feature.

### Node detector
&emsp;&emsp;All the XiakeCloud node server information displayed here can be accessed by accessing the IP address of the server details page to view server details and mobile device connection logs.

> The above is a brief introduction to the interface of the software, and more fun features will be felt slowly during your use. XiakeCloud is a platform-based software. More marketing functions are provided by the 'module market', and the corresponding functional modules are purchased according to their needs. The use of functional modules is provided by the module author.

