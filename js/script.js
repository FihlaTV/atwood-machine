// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

var options = {
    friction: 0,
    restitution: 1.3
}
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 300, 300, options);
var boxB = Bodies.rectangle(450, 50, 80, 80, options);
var boxC = Bodies.rectangle(450, 50, 80, 80, options);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);