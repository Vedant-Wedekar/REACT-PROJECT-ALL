(function (d) {
    let config = {
        kitId: 'yww3hlo',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config); } catch (e) { } }; s.parentNode.insertBefore(tk, s);
})(document);

let errorPlane = null;
let errorGuiTexture = null;
let errorButton = null;
let errorTimeout = -1;

let createScene = async function () {
    
    let scene = new BABYLON.Scene(engine);

    scene.clearColor = BABYLON.Color3.Black();

    let camera1 = new BABYLON.ArcRotateCamera("camera", 1.55, 1.36, 8, new BABYLON.Vector3(0, 2.5, 0), scene);

    // This attaches the camera to the canvas
    camera1.attachControl(canvas, true);
    camera1.layerMask = 1;

    //camera 2
    let camera2 = new BABYLON.ArcRotateCamera("camera2", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(0), 10, BABYLON.Vector3.Zero(), scene);
    camera2.viewport = new BABYLON.Viewport(-0.075, 0.8, 0.3, 0.2);
    camera2.layerMask = 2;

    scene.activeCameras.push(camera2, camera1);

    let spotLight = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 10 * 20, 0), new BABYLON.Vector3(0, -1, 0), BABYLON.Tools.ToRadians(20), 250, scene);
    spotLight.angle = BABYLON.Tools.ToRadians(45);
    spotLight.intensity = 0;

    spotLight.includeOnlyWithLayerMask = 1;

    let busts = await BABYLON.SceneLoader.ImportMeshAsync("", "https://piratejc.github.io/assets/", "busts.glb", scene);

    let bust1 = scene.getMeshByName("bust1");
    let bust2 = scene.getMeshByName("bust2a");
    let bust3 = scene.getMeshByName("bust3");
    let bust4 = scene.getMeshByName("bust4");
    let bust5 = scene.getMeshByName("bust5");
    bust1.layerMask = 1;
    bust2.layerMask = 1;
    bust3.layerMask = 1;
    bust4.layerMask = 1;
    bust5.layerMask = 1;

    let marbleTexture = new BABYLON.Texture("https://piratejc.github.io/assets/Marble_Statue.jpg", scene);
    let baseTexture = new BABYLON.Texture("https://piratejc.github.io/assets/Marble_Base.jpg", scene);

    let marbleMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("1BDLAF#8", scene);
    let baseMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("1BDLAF#8", scene);
    marbleMaterial.name = "marbleMaterial";
    baseMaterial.name = "baseMaterial";
    marbleMaterial.getBlockByName("Texture").texture = marbleTexture;
    baseMaterial.getBlockByName("Texture").texture = baseTexture;

    let bustMeshes = [scene.getMeshByName("bustBase1"),  scene.getMeshByName("bust2b"), scene.getMeshByName("bustBase2"), scene.getMeshByName("bustBase3"), scene.getMeshByName("bustBase4"), scene.getMeshByName("bustBase5"), scene.getMeshByName("base1"), scene.getMeshByName("base2"), scene.getMeshByName("base3"), scene.getMeshByName("base4"), scene.getMeshByName("base5"), bust1, bust2, bust3, bust4, bust5];

    bustMeshes[0].material = marbleMaterial;
    bustMeshes[1].material = marbleMaterial;
    bustMeshes[2].material = marbleMaterial;
    bustMeshes[3].material = marbleMaterial;
    bustMeshes[4].material = marbleMaterial;
    bustMeshes[5].material = marbleMaterial;
    bustMeshes[6].material = baseMaterial;
    bustMeshes[7].material = baseMaterial;
    bustMeshes[8].material = baseMaterial;
    bustMeshes[9].material = baseMaterial;
    bustMeshes[10].material = baseMaterial;

    for (let each in bustMeshes){
        bustMeshes[each].isPickable = false;
        bustMeshes[each].visibility = 0;
        bustMeshes[each].layerMask = 1;
    };

    let ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10*20, height: 10*20}, scene);
    ground.layerMask = 1;
    let shadowGenerator = new BABYLON.ShadowGenerator(1024, spotLight);
    ground.receiveShadows = true;
    shadowGenerator.filter = BABYLON.ShadowGenerator.FILTER_PCF;

    for (let each in busts.meshes){
        shadowGenerator.getShadowMap().renderList.push(busts.meshes[each]);
    }

    busts = [bust1, bust2, bust3, bust4, bust5];

    let loadedMesh = await BABYLON.SceneLoader.ImportMeshAsync("", "https://piratejc.github.io/assets/", "headStone.glb", scene);

    let headStone = loadedMesh.meshes[1];
    headStone.layerMask = 1;
    headStone.setParent(null);
    headStone.name = "headStone";
    loadedMesh.meshes[0].dispose();

    let spotLight2 = new BABYLON.SpotLight("spotLight2", new BABYLON.Vector3(-25, 45, 38), new BABYLON.Vector3(0.6, -1, -1), BABYLON.Tools.ToRadians(60), 70, scene);
    spotLight2.angle = BABYLON.Tools.ToRadians(45);

    let shadowGenerator2 = new BABYLON.ShadowGenerator(1024, spotLight2);
    shadowGenerator2.filter = BABYLON.ShadowGenerator.FILTER_PCF;
    shadowGenerator2.getShadowMap().renderList.push(headStone);

    let guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(headStone, 1024, 1024, true, false, false);
    await guiTexture.parseFromSnippetAsync("Q0T624#4");

    for (let each in guiTexture.getDescendants()){
        guiTexture.getDescendants()[each].fontFamily = "taurunum-ferrum-iron";
        guiTexture.getDescendants()[each].fontWeight = 400;
    }

    let headStoneNodeMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("I9JQSQ#17", scene);
    headStoneNodeMaterial.name = "headStoneMat";

    headStoneNodeMaterial.getBlockByName("ImageSource").texture = guiTexture;

    headStone.material = headStoneNodeMaterial;

    let cursorLocationNode = headStoneNodeMaterial.getBlockByName("cursorLocation");

    const spotlightObservable = scene.onPointerObservable.add(function castRay(pointerInfo){
        if (pointerInfo.pickInfo.pickedMesh && pointerInfo.pickInfo.pickedMesh.name === "headStone"){
            cursorLocationNode.value = pointerInfo.pickInfo.getTextureCoordinates();
        }
    });

    guiTexture.getDescendants()[1].onPointerUpObservable.add(async function() {
        startExperience(camera1, headStone, marbleTexture, spotLight2, spotLight, spotlightObservable, busts, bustMeshes, scene);
    });

    return scene;
};

let createNodeMaterial = function(mesh, nodeMaterial, videoTexture, marbleTexture, projectionStretch, projectionX, projectionY, gradientStep1, gradientstep2, scene){
    let nodeMaterialClone = nodeMaterial.clone("");
    nodeMaterialClone.name = mesh.name + "Material";
    nodeMaterialClone.getBlockByName("videoTexture").texture = videoTexture;
    nodeMaterialClone.getBlockByName("Texture").texture = marbleTexture;
    nodeMaterialClone.getBlockByName("projectionStretch").value = projectionStretch;
    nodeMaterialClone.getBlockByName("projectionX").value = projectionX;
    nodeMaterialClone.getBlockByName("projectionY").value = projectionY;
    nodeMaterialClone.getBlockByName("Gradient").colorSteps[1].step = gradientStep1;
    nodeMaterialClone.getBlockByName("Gradient").colorSteps[2].step = gradientstep2;
    return nodeMaterialClone;
};

let startExperience = async function(camera, headStone, marbleTexture, spotLight2, spotLight, spotlightObservable, busts, bustMeshes, scene){

    let videoTexture = new BABYLON.VideoTexture("", "https://piratejc.github.io/assets/Grim_Grinning_Ghosts_YouTube.mp4", scene, false, true);
    videoTexture.video.autoplay = false;

    let nodeMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("1BDLAF#14", scene);
    busts[0].material = createNodeMaterial(busts[0], nodeMaterial, videoTexture, marbleTexture, 2.5, 0.29, 0.44, 0.04, 0.1, scene);
    busts[1].material = createNodeMaterial(busts[1], nodeMaterial, videoTexture, marbleTexture, 2.5, 0.8, 0.44, 0.04, 0.1, scene);
    busts[2].material = createNodeMaterial(busts[2], nodeMaterial, videoTexture, marbleTexture, 3, 1.54, 0.42, 0.04, 0.08, scene);
    busts[3].material = createNodeMaterial(busts[3], nodeMaterial, videoTexture, marbleTexture, 2.5, 1.74, 0.43, 0.04, 0.08, scene);
    busts[4].material = createNodeMaterial(busts[4], nodeMaterial, videoTexture, marbleTexture, 2.5, 2.24, 0.45, 0.04, 0.1, scene);

    BABYLON.Animation.CreateAndStartAnimation("intensityDim", spotLight2, "intensity", 30, 60, 1, 0, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, async function(){
        headStone.dispose();
        scene.onPointerObservable.remove(spotlightObservable);

        camera.setTarget(new BABYLON.Vector3(0, 3.25, 0));
        camera.radius = 50;
        camera.beta = 1.4;

        for (let each in bustMeshes){
            bustMeshes[each].visibility = 1;
        }

        let webCamTexture;
        let webCamMaterial;

        let hauntSpecificData = [{
            bust1ButtonPosition: 14,
            bust1Scale: 3.25,
            bust1xPos: 1.9,
            bust1yPos: 0.88,
            bust1faceRotation: 0},
            {bust2ButtonPosition: 7,
            bust2Scale: 3.7,
            bust2xPos: 0.58,
            bust2yPos: 1.25,
            bust2faceRotation: 0.25},
            {bust3ButtonPosition: 0,
            bust3Scale: 3.75,
            bust3xPos: 2.41,
            bust3yPos: 1.03,
            bust3faceRotation: 0},
            {bust4ButtonPosition: -7,
            bust4Scale: 3.75,
            bust4xPos: 2.1,
            bust4yPos: 1.06,
            bust4faceRotation: 0},
            {bust5ButtonPosition: -14,
            bust5Scale: 3,
            bust5xPos: 1.11,
            bust5yPos: 1.1,
            bust5faceRotation: 0.17}
        ];

        let hauntPlanes = [];

        let activeElements = {bust:0, button:0}

        for(let i=0; i<hauntSpecificData.length; i++){
            let hauntPlane = BABYLON.MeshBuilder.CreatePlane("hauntPlane"+(i+1), {width:4, height:1.75});
            hauntPlane.visibility = 0;
            hauntPlane.layerMask = 1;
            hauntPlane.rotation.x = BABYLON.Tools.ToRadians(180);
            hauntPlane.rotation.y = BABYLON.Tools.ToRadians(180);
            hauntPlane.position = new BABYLON.Vector3(hauntSpecificData[i]["bust"+(i+1)+"ButtonPosition"], 2.25, 1.7);

            hauntPlanes.push(hauntPlane);

            let guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(hauntPlane, 160, 70, true, false, false);
            let button = BABYLON.GUI.Button.CreateSimpleButton("button"+(i+1), "Haunt");
            button.width = 1;
            button.height = 1;
            button.color = "black";
            button.cornerRadius = 20;
            button.background = "grey";
            button.fontFamily = "taurunum-ferrum-iron";
            button.fontWeight = 400;
            button.fontSize = 40;
            button.onPointerUpObservable.add(async function() {
                try {
                    if (!webCamTexture){
                        let webCamAssets = await getWebCam(scene);
                        webCamMaterial = webCamAssets[0];
                        webCamTexture = webCamAssets[1];
                    }
                    activeElements = bustTakeOver(busts[i], activeElements, videoTexture, webCamMaterial, webCamTexture, button, hauntSpecificData[i]["bust"+(i+1)+"ButtonPosition"], hauntSpecificData[i]["bust"+(i+1)+"Scale"], hauntSpecificData[i]["bust"+(i+1)+"xPos"], hauntSpecificData[i]["bust"+(i+1)+"yPos"], hauntSpecificData[i]["bust"+(i+1)+"faceRotation"], camera);
                } catch {
                    showWebCamError();
                }
            });
            guiTexture.addControl(button);
        };

        let cameraAnim = await BABYLON.Animation.CreateFromSnippetAsync("RPN84B");
        camera.animations.push(cameraAnim[0]);
        scene.beginAnimation(camera, 0, 2000, true);

        BABYLON.Animation.CreateAndStartAnimation("intensityDim", spotLight, "intensity", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, function(){
            for (let i = 0; i<hauntPlanes.length; i++){
                BABYLON.Animation.CreateAndStartAnimation("hauntPlane"+(i+1)+"Fade", hauntPlanes[i], "visibility", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
            }
            BABYLON.Animation.CreateAndStartAnimation("faceFade", bustMeshes[11].material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
            BABYLON.Animation.CreateAndStartAnimation("faceFade", bustMeshes[12].material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, function(){
                videoTexture.video.play();
                videoTexture.video.loop = true;
            }, scene);  
            BABYLON.Animation.CreateAndStartAnimation("faceFade", bustMeshes[13].material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
            BABYLON.Animation.CreateAndStartAnimation("faceFade", bustMeshes[14].material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
            BABYLON.Animation.CreateAndStartAnimation("faceFade", bustMeshes[15].material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
        });
    });
    
};

let bustTakeOver = function(bust, activeElements, videoTexture, webCamMaterial, webCamTexture, button, bustPosition, scale, xPos, yPos, faceRotation, camera){

    if(activeElements["bust"] === 0){
        BABYLON.Animation.CreateAndStartAnimation("webCamFade", webCamMaterial.getBlockByName("webCamFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
        bustHaunt(bust, webCamTexture, button, webCamMaterial, scale, xPos, yPos, faceRotation, camera);
        BABYLON.Animation.CreateAndStartAnimation("cameraMove", camera, "target", 30, 60, camera.target, new BABYLON.Vector3(bustPosition, 5, camera.target.z), BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, new BABYLON.ExponentialEase(), null, scene);
        BABYLON.Animation.CreateAndStartAnimation("cameraMove", camera, "radius", 30, 60, camera.radius, 15, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, new BABYLON.ExponentialEase(), null, scene);
        activeElements["bust"] = bust;
        activeElements["button"] = button;
    }
    else if(activeElements["bust"] != 0 && activeElements["bust"] != bust){
        let previousBust = activeElements["bust"];
        let previousButton = activeElements["button"];
        bustUnHaunt(previousBust, videoTexture, previousButton);
        bustHaunt(bust, webCamTexture, button, webCamMaterial, scale, xPos, yPos, faceRotation, camera);
        BABYLON.Animation.CreateAndStartAnimation("cameraMove", camera, "target", 30, 60, camera.target, new BABYLON.Vector3(bustPosition, 5, camera.target.z), BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, new BABYLON.ExponentialEase(), null, scene);
        activeElements["bust"] = bust;
        activeElements["button"] = button;
    }
    else if(activeElements["bust"] === bust){
        BABYLON.Animation.CreateAndStartAnimation("webCamFade", webCamMaterial.getBlockByName("webCamFade"), "value", 30, 60, 1, 0, 0, null, null, scene);
        bustUnHaunt(bust, videoTexture, button);
        BABYLON.Animation.CreateAndStartAnimation("cameraMove", camera, "target", 30, 60, camera.target, new BABYLON.Vector3(0, 3.25, camera.target.z), BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, new BABYLON.ExponentialEase(), null, scene);
        BABYLON.Animation.CreateAndStartAnimation("cameraMove", camera, "radius", 30, 60, camera.radius, 50, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, new BABYLON.ExponentialEase(), null, scene);
        activeElements["bust"] = 0;
        activeElements["button"] = 0;
    }
    return activeElements;
}

let bustHaunt = function(bust, webCamTexture, button, webCamMaterial, scale, xPos, yPos, faceRotation, camera){
    BABYLON.Animation.CreateAndStartAnimation("faceFade", bust.material.getBlockByName("faceFade"), "value", 30, 60, 1, 0, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, function(){
        bust.material.getBlockByName("videoTexture").texture = webCamTexture;
        button.textBlock.text = "Un-Haunt"
        bust.material.getBlockByName("textureScale").value = scale;
        bust.material.getBlockByName("texturePosX").value = xPos;
        bust.material.getBlockByName("texturePosY").value = yPos;
        bust.material.getBlockByName("angle").value = faceRotation;
        BABYLON.Animation.CreateAndStartAnimation("faceFade", bust.material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
    }, scene);
}

let bustUnHaunt = function(bust, videoTexture, button){
    BABYLON.Animation.CreateAndStartAnimation("faceFade", bust.material.getBlockByName("faceFade"), "value", 30, 60, 1, 0, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, function(){
        bust.material.getBlockByName("videoTexture").texture = videoTexture;
        button.textBlock.text = "Haunt"
        bust.material.getBlockByName("textureScale").value = 1;
        bust.material.getBlockByName("texturePosX").value = 0;
        bust.material.getBlockByName("texturePosY").value = 0;
        bust.material.getBlockByName("angle").value = 0;
        BABYLON.Animation.CreateAndStartAnimation("faceFade", bust.material.getBlockByName("faceFade"), "value", 30, 60, 0, 1, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, null, scene);
    }, scene);
}

let getWebCam = async function(scene){
    let webCamAssets = [];
    let webCamMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("39BXHF#5", scene);
    webCamMaterial.name = "webCamMaterial";
    webCamAssets.push(webCamMaterial);
    let webCamTexture = await BABYLON.VideoTexture.CreateFromWebCamAsync(scene, {deviceId: "webCam", maxHeight: 1080, maxWidth: 1920, minHeight: 1080, minWidth: 1920}, false, true);
    webCamMaterial.getBlockByName("Texture").texture = webCamTexture;
    let webCamPlane = BABYLON.MeshBuilder.CreateGround("webCamPlane", {width: 19.20, height: 10.80}, scene);
    webCamPlane.material = webCamMaterial;
    webCamPlane.layerMask = 2;
    webCamAssets.push(webCamTexture);
    
    return webCamAssets;
}

let showWebCamError = function(){
    if (!errorButton) {
        errorPlane = BABYLON.MeshBuilder.CreatePlane("errorPlane", {width:15, height:4.5});
        errorPlane.rotation.x = BABYLON.Tools.ToRadians(225);
        errorPlane.rotation.y = BABYLON.Tools.ToRadians(180);
        errorPlane.position.z = 7;
        errorPlane.position.y = 2;
        errorGuiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(errorPlane, 450, 120, true, false, false);
        errorButton = BABYLON.GUI.Button.CreateSimpleButton("errorButton", "Can't Haunt Without A Webcam, And It Is In Use...");
        errorButton.width = 1;
        errorButton.height = 1;
        errorButton.color = "black";
        errorButton.cornerRadius = 20;
        errorButton.background = "grey";
        errorButton.fontFamily = "taurunum-ferrum-iron";
        errorButton.fontWeight = 400;
        errorButton.fontSize = 40;
        errorButton.onPointerUpObservable.add(async function() {
            errorPlane.isVisible = false;
        });
        errorGuiTexture.addControl(errorButton);
    } else {
        errorPlane.isVisible = true;
    }

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
        errorPlane.isVisible = false;
    }, 2000);
}
