function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5umlIJY4S9p":
        Script1();
        break;
      case "6eLHEgB458r":
        Script2();
        break;
      case "5gid33UMYfX":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5VgmnAnE28O');
const duration = 2000;
const easing = 'ease-out';
const id = '5rbyUjhuJea';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5bXBMNj9uBX');
const duration = 1000;
const easing = 'ease-out';
const id = '6YY4yW842n9';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5bQSBCRDViA');
const duration = 750;
const easing = 'ease-out';
const id = '5aIsRRohvOR';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
