# Workshop: Photogrammetry

In this workshop, we will explore photogrammetry, a technique that allows us to create 3D models from photographs. We will use a series of apps and tools to capture and process images.

Mobile Apps:
- RealityScan Mobile ([iOS](https://apps.apple.com/us/app/realityscan-mobile/id1584832280), [Android](https://play.google.com/store/apps/details?id=com.epicgames.realityscan))
- Scaniverse ([iOS](https://apps.apple.com/us/app/scaniverse-3d-scanner/id1541433223), [Android](https://play.google.com/store/search?q=Scaniverse&c=apps&hl=en_US))
- KIRI Engine ([iOS](https://apps.apple.com/us/app/kiri-engine-3d-scanner-lidar/id1577127142), [Android](https://play.google.com/store/apps/details?id=com.kiriengine.app))
- Polycam ([iOS](https://apps.apple.com/us/app/polycam-3d-scans-floor-plans/id1532482376), [Android](https://play.google.com/store/apps/details?id=ai.polycam))
- Luma 3D ([iOS](https://apps.apple.com/us/app/luma-3d-capture/id1615849914)) (might not work!)

Desktop Apps (optional):
- RealityScan ([Windows](https://www.realityscan.com/))
- Meshroom ([Windows & Linux](https://alicevision.org/#meshroom))
- Metashape ([Windows, **Mac**, Linux](https://www.agisoft.com/)) (has trial version, contact me for more ;))

Web-based Apps (optional):
- [KIRI Engine](https://kiriengine.com/)
- [Polycam](https://poly.cam/)
- [Luma 3D](https://lumalabs.ai/dashboard/captures) (might not work!)


---

When taking pictures for a photogrammetry model, it is always better to capture with a professional camera (the bigger the better), using RAW format, and to post-process the images on your computer.

## Capturing an Object
Circulate around the object, taking pictures from multiple sides. You should capture from various heights, creating a sort of “dome” on top and around the object. Each picture should capture the entire object, but you could also take additional close-up pictures to get better details.

![photogrammetry - objects](/images/photogram1-700xauto.jpg)

## Capturing a Facade
For a facade, you want to have a few images of each detail from several positions. To that end, you can simply walk along the facade, and capture images in 3 directions. Make sure you have a lot of overlap between the images.

![photogrammetry - facade](/images/photogram2-700xauto.jpg)

## Capturing an Interior
Go around the room, with your back to the wall, and capture images of the walls that are opposite from you. You may want to take the images in portrait orientation so that a single image would capture from the ceiling to the floor. You may need to take a few images of the middle of the floor and ceiling from time to time, to make sure they are covered in your images.

![photogrammetry - interior](/images/photogram3-700xauto.jpg)

## Interior – Multiple Rooms
If you want your model to connect several rooms, you need to have a buffer between them that is sufficiently covered by images, so that the computer knows how to connect them. If there’s no opening between the two rooms, there’s no way to connect them automatically.

Capture the two rooms as any other single interior room. Then capture the doorway or opening between them, as if it was an object – meaning, from many different sides.

![photogrammetry - interior multiple rooms](/images/photogram4-700xauto.jpg)

---

## Resources:

- [A Field Guide To Gaussian Splatting](https://rd.nytimes.com/projects/gaussian-splatting-guide/), NYT R&D
