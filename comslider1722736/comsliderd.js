if ((typeof cmsGGI1722736 !== 'undefined') && (cmsGGI1722736 != null) && (typeof cmsGGI1722736.Destroy !== 'undefined')){cmsGGI1722736.Destroy();}function comSlider1722736() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider1722736 = null;cmsGGI1722736 = this;this.Destroy = function(){ if (self.jssor_slider1722736 != null) { self.jssor_slider1722736.$Destroy(); self.jssor_slider1722736 = null;} };  	this.jssor_slider1722736_starter = function (containerId) { 
            var _SlideshowTransitions = [ 
{$Duration:1500,x:0.5,$Cols:2,$ChessMode:{$Column:3},$Easing:{$Left:$JssorEasing$.$EaseInOutCubic},$Opacity:2,$Brother:{$Duration:1500,$Opacity:2}}
,{$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$JssorEasing$.$EaseInExpo,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
,{$Duration:1600,y:-1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Brother:{$Duration:1600,y:1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}}
,{$Duration:1000,$Zoom:11,$Easing:{$Zoom:$JssorEasing$.$EaseInCubic,$Opacity:$JssorEasing$.$EaseOutQuad},$Opacity:2}];
			
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$Idle: 0,
										$LazyLoading: 1,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
										$FillMode: 1,										//[Optional] The way to fill image in slide, 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0 
										$Loop: 1,										//[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1 
										$PauseOnHover: 1, 							//[Optional] Whether to pause when mouse over if a slider is auto playing, 0: no pause, 1: pause for desktop, 2: pause for touch device, 3: pause for desktop and touch device, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1 
										$StartIndex: 0,	//[Optional] Index of slide to display when initialize, default value is 0 
 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 1,       //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									}										
									
					, $ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 1       //[Required] 0 Never, 1 Mouse Over, 2 Always
					}
										
									};

									self.jssor_slider1722736 = new $JssorSlider$(containerId, options);										
									
										}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS1722736("#comSContainer1722736_").parent().width();
										if (parentWidth) {
											self.jssor_slider1722736.$ScaleWidth(Math.min(parentWidth, 700));
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function(options)
					{
				   jqCS1722736 = jQuery1722736.noConflict(false);jqCS1722736("#comslider_in_point_1722736").html('<div id="comSContainer1722736_" name="comSContainer1722736_" style="display: inline-block; text-align: left;  border:0px; width:700px; height:290px; position: relative; top: 0px; left: 0px;"><div data-u="slides" style="position: absolute; left: 0px; top: 0px; width:700px; height:290px; overflow: hidden;"><div idle="3000" id="imgidle_1722736_1393203"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Wimlib-Imagex-Package"><img class="cmskb_image_0" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/230108073453101.png"></img></a></div><div idle="3000" id="imgidle_1722736_1392392"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Upload-Image"><img class="cmskb_image_1" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/221226175444102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1392391"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/ICNS-Builder"><img class="cmskb_image_2" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/221226175444101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1391963"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Wireless-USB-Big-Sur-Adapter"><img class="cmskb_image_3" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/221217095641101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1357457"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Geforce-Kepler-patcher"><img class="cmskb_image_4" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/211229054856101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1360125"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Icon-Changer"><img class="cmskb_image_5" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/220122065512101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1276247"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/HP-Probook-EliteBook-Package-Creator-OC"><img class="cmskb_image_6" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200719081941102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336246"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/My-Simple-OC-Themes"><img class="cmskb_image_7" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718194435101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1380731"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Un-mount-EFI-Ventura"><img class="cmskb_image_8" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/220805150352101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1379371"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Startosinstall-Ventura"><img class="cmskb_image_9" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/220721185723101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1278904"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/OpenCore-Creator"><img class="cmskb_image_10" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200802223105101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1365142"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/MountEFI"><img class="cmskb_image_11" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/220306163746101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1362949"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Legacy-OpenCore-Packager"><img class="cmskb_image_12" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/220216184224101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1353465"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/SHC-3.8.9b"><img class="cmskb_image_13" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/211124142658101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336244"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/KextLoadMenu"><img class="cmskb_image_14" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718192626105.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1357269"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/HoRNDIS"><img class="cmskb_image_15" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/211227055752101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1353965"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Command-Line-SnapShot-Mounter"><img class="cmskb_image_16" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/211129103519101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336240"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Background-Resizer"><img class="cmskb_image_17" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718192626101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336242"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Kext-Install"><img class="cmskb_image_18" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718192626103.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336245"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/RAR-Archiver"><img class="cmskb_image_19" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718192626106.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1304339"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Download-BigSur"><img class="cmskb_image_20" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/201227094834101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1222728"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Legacy-Video-patch"><img class="cmskb_image_21" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/191206063155102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1299031"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/WirelessAdapterCloverBigSur"><img class="cmskb_image_22" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/201122085639101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1283797"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Drop-EFI-Big-Sur"><img class="cmskb_image_23" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200901171928102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1120984"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Kext-Droplet"><img class="cmskb_image_24" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190216073004101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1288974"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/My-Simple-OC-Themes/blob/master/Themes%20Downloader.md"><img class="cmskb_image_25" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200926115249101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1286770"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/VoodooHDA-OC"><img class="cmskb_image_26" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200916074546101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1283970"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Icnspack-Builder"><img class="cmskb_image_27" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200902201715101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1283796"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Beta-Access-Software-Utility"><img class="cmskb_image_28" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200901171928101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1279157"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Intel-Wifi"><img class="cmskb_image_29" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200804114900101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1280655"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/OpenCore-Package"><img class="cmskb_image_30" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200813160054101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1276253"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Kext-Droplet-Big-Sur"><img class="cmskb_image_31" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200719083417101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1276248"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Install-Media-BS-OC"><img class="cmskb_image_32" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200719082101103.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1257986"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/FixAtherosWifi-macOSCatalina-Clover"><img class="cmskb_image_33" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200426175431101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1246673"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/ASR-Clone-SSD-macOS-Catalina"><img class="cmskb_image_34" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200315160906101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1243124"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/macOS-Catalina-HD"><img class="cmskb_image_35" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/200301163823101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094641"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Wireless-USB-Adapter"><img class="cmskb_image_36" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201094255102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1188352"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/VoodooHDA-2.9.0-Clover-V12"><img class="cmskb_image_37" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190811111139101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1222727"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Patch-USB-Port-Limite-Clover-EFI"><img class="cmskb_image_38" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/191206062833101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094640"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/HP-Probook-EliteBook-Package-Creator"><img class="cmskb_image_39" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201094237101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094643"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Wireless-USB-Adapter-Clover"><img class="cmskb_image_40" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201094336104.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1152838"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Fix-Graphics-HD-3000-Mojave-10.14"><img class="cmskb_image_41" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190501102317101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1147535"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Fix-Old-NVIDIA-macOS-Mojave"><img class="cmskb_image_42" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190419233340101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1147463"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Mount-ESP"><img class="cmskb_image_43" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190419150704101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1138929"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/imgbb-App"><img class="cmskb_image_44" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190329215254101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1134013"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/USB-Wireless-Utility"><img class="cmskb_image_45" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190315105217101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1130072"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Show-Hide"><img class="cmskb_image_46" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190307090054101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094932"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Fix-PackageMaker-APFS"><img class="cmskb_image_47" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201225611101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094679"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Drop-EFI"><img class="cmskb_image_48" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201114634101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336243"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/KextLoadMenu"><img class="cmskb_image_49" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718192626104.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1114002"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Disk-Menu"><img class="cmskb_image_50" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/190127095000101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1336241"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/D-LinkUtility-Package"><img class="cmskb_image_51" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/210718192626102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1095087"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Disk-Speed-Test"><img class="cmskb_image_52" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181202084120101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094684"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Create-Install-Media"><img class="cmskb_image_53" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201120824101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094670"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/TP-LINK-WIFI-Network-macOS"><img class="cmskb_image_54" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201112400101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094685"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Chameleon-macOS-Mojave-USB"><img class="cmskb_image_55" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201120843102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094683"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/macOS-Mojave-HD"><img class="cmskb_image_56" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201115134101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094686"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/macOS-RecoveryHD-Partition"><img class="cmskb_image_57" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201120902103.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094688"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Carillon-AppleALC-Version"><img class="cmskb_image_58" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201121349101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094694"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/HWSensors-V6.26.1464-EFI"><img class="cmskb_image_59" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201125004101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094771"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/rsync-3.1.3-macOS-Package"><img class="cmskb_image_60" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201163957101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094779"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Chameleon-Mac-OS-X-Snow-Leopard"><img class="cmskb_image_61" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201170644101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1094933"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/macOS-High-Sierra-HD"><img class="cmskb_image_62" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181201230152101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1095092"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/AppleIntelE1000e"><img class="cmskb_image_63" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181202092754101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1095093"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/BCM5722D"><img class="cmskb_image_64" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181202093054102.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1095094"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/USB-3.0-NEC"><img class="cmskb_image_65" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181202093321103.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1095147"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Mac-OSX-Install-DVD-Creator"><img class="cmskb_image_66" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181202131646101.png?ot=1672095292"></img></a></div><div idle="3000" id="imgidle_1722736_1095803"><a style="text-decoration: none !important;"  href="https://github.com/chris1111/Easy-Web-Drivers-Patcher"><img class="cmskb_image_67" data-u="image" imgw="372" imgh="290" src2="comslider1722736/img/181204081801101.png?ot=1672095292"></img></a></div></div><!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora1722736l              (normal).jssora1722736r              (normal).jssora1722736l:hover        (normal mouseover).jssora1722736r:hover        (normal mouseover).jssora1722736ldn            (mousedown).jssora1722736rdn            (mousedown)*/.jssora1722736l, .jssora1722736r, .jssora1722736ldn, .jssora1722736rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora_back_1722736 { filter: alpha(opacity=100);opacity: 1; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("comslider1722736/imgnavctl/defback.png?1673181300");}.jssora_back_1722736:hover {cursor:pointer; background-color:transparent; filter: alpha(opacity=100);opacity: 1; background-image: url("comslider1722736/imgnavctl/defbackhover.png?1673181300");}.jssora_forward_1722736 { filter: alpha(opacity=100);opacity: 1; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("comslider1722736/imgnavctl/defforward.png?1673181300");}.jssora_forward_1722736:hover {cursor:pointer; background-color:transparent; filter: alpha(opacity=100);opacity: 1; background-image: url("comslider1722736/imgnavctl/defforwardhover.png?1673181300");} </style><!-- Arrow Left --><div data-u="arrowleft" class="jssora_back_1722736" style="width:32px;height:32px;top:0px;left:10px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div><!-- Arrow Right --><div data-u="arrowright" class="jssora_forward_1722736" style="width:32px;height:32px;top:0px;right:10px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div></div>');
                    jqCS1722736("#comslider_in_point_1722736 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider1722736_starter("comSContainer1722736_");
							
						self.ScaleSlider();
						jqCS1722736(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS1722736(window).bind("load", self.ScaleSlider);
						jqCS1722736(window).bind("resize", self.ScaleSlider);
						jqCS1722736(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop().substring(0,3) == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider1722736 = new comSlider1722736();
objcomSlider1722736.include('comslider1722736/js/jquery-1.10.1.js?ts=1673181335', false);
objcomSlider1722736.include('comslider1722736/js/jquery-ui-1.10.3.effects.js?ts=1673181335', false);
objcomSlider1722736.include('comslider1722736/js/jssor.slider.min_2_0.js?ts=1673181335', false);
objcomSlider1722736.include('comslider1722736/js/jssorcap.min.js?ts=1673181335', true);
