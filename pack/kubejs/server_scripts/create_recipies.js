// Create Recipies
ServerEvents.recipes(event => {
  // Veridium
event.recipes.create.mixing(
  Item.of('create:veridium'),
  [
    Ingredient.of('minecraft:flint'),
    Ingredient.of('minecraft:clay_ball', 3),
    Fluid.of('minecraft:lava', 50)
  ]
)
event.recipes.create.mixing(
  Item.of('create:asurine'),
  [
    Ingredient.of('minecraft:flint'),
    Ingredient.of('minecraft:clay_ball', 3),
    Fluid.of('minecraft:water', 250)
  ]
)
})