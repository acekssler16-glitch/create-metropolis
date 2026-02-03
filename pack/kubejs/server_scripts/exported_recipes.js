ServerEvents.recipes(event => {

    event.shaped(
            Item.of('minecraft:compass'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    A: 'minecraft:iron_nugget',
                    B: 'minecraft:redstone'
            }
    )
});
