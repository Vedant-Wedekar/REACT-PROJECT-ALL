window.addEventListener("DOMContentLoaded", async function () {
    // Get the canvas element
    let canvas = document.getElementById("renderCanvas");

    // Create BabylonJS Engine
    let engine = new BABYLON.Engine(canvas, true);

    // Create Scene
    let scene = await createScene(engine, canvas);

    // Render Loop
    engine.runRenderLoop(function () {
        scene.render();
    });

    // Handle window resize
    window.addEventListener("resize", function () {
        engine.resize();
    });
});

let createScene = async function (engine, canvas) {
    let scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

    let camera1 = new BABYLON.ArcRotateCamera(
        "camera",
        1.55,
        1.36,
        8,
        new BABYLON.Vector3(0, 2.5, 0),
        scene
    );

    camera1.attachControl(canvas, true);
    camera1.layerMask = 1;

    let camera2 = new BABYLON.ArcRotateCamera(
        "camera2",
        BABYLON.Tools.ToRadians(90),
        BABYLON.Tools.ToRadians(0),
        10,
        BABYLON.Vector3.Zero(),
        scene
    );

    camera2.viewport = new BABYLON.Viewport(-0.075, 0.8, 0.3, 0.2);
    camera2.layerMask = 2;

    scene.activeCameras.push(camera2, camera1);

    let spotLight = new BABYLON.SpotLight(
        "spotLight",
        new BABYLON.Vector3(0, 10 * 20, 0),
        new BABYLON.Vector3(0, -1, 0),
        BABYLON.Tools.ToRadians(20),
        250,
        scene
    );
    spotLight.angle = BABYLON.Tools.ToRadians(45);
    spotLight.intensity = 0;
    spotLight.includeOnlyWithLayerMask = 1;

    let busts = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "https://piratejc.github.io/assets/",
        "busts.glb",
        scene
    );

    let bust1 = scene.getMeshByName("bust1");
    let bust2 = scene.getMeshByName("bust2a");
    let bust3 = scene.getMeshByName("bust3");
    let bust4 = scene.getMeshByName("bust4");
    let bust5 = scene.getMeshByName("bust5");

    let bustMeshes = [bust1, bust2, bust3, bust4, bust5];

    bustMeshes.forEach((bust) => {
        if (bust) {
            bust.layerMask = 1;
            bust.isPickable = false;
            bust.visibility = 0;
        }
    });

    let ground = BABYLON.MeshBuilder.CreateGround(
        "ground",
        { width: 10 * 20, height: 10 * 20 },
        scene
    );
    ground.layerMask = 1;

    let shadowGenerator = new BABYLON.ShadowGenerator(1024, spotLight);
    ground.receiveShadows = true;
    shadowGenerator.filter = BABYLON.ShadowGenerator.FILTER_PCF;

    busts.meshes.forEach((mesh) => {
        shadowGenerator.getShadowMap().renderList.push(mesh);
    });

    return scene;
};
