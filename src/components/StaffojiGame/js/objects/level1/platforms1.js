/**
 * Creates and configures the platforms for 1Level in the scene.
 * @param {Phaser.Scene} scene - The Phaser scene.
 * @returns {Phaser.Physics.Arcade.StaticGroup} The group of platforms.
 */
export function createPlatforms1(scene) {
  const platforms = scene.physics.add.staticGroup()

  // Pl1
  platforms.create(32, 638, 'groundBrown')
  platforms.create(32, 574, 'groundBrown')
  platforms.create(32, 514, 'groundBrownGreenUp')
  platforms.create(96, 638, 'groundBrown')
  platforms.create(96, 574, 'groundBrown')
  platforms.create(96, 514, 'groundBrownGreenUp')
  platforms.create(160, 638, 'groundBrown')
  platforms.create(160, 574, 'groundBrown')
  platforms.create(160, 514, 'groundBrownGreenUp')
  platforms.create(204, 638, 'groundBrown')
  platforms.create(204, 574, 'groundBrown')
  platforms.create(204, 514, 'groundBrownGreenUp')
  platforms.create(268, 638, 'groundBrown')
  platforms.create(268, 574, 'groundBrown')
  platforms.create(268, 514, 'groundBrownGreenUp')
  platforms.create(332, 638, 'groundBrown')
  platforms.create(332, 574, 'groundBrown')
  platforms.create(332, 514, 'groundBrownGreenUp')
  platforms.create(396, 638, 'groundBrown')
  platforms.create(396, 574, 'groundBrown')
  platforms.create(396, 514, 'groundBrownGreenUp')
  platforms.create(460, 638, 'groundBrown')
  platforms.create(460, 574, 'groundBrown')
  platforms.create(460, 514, 'groundBrownGreenUp')
  platforms.create(524, 638, 'groundBrown')
  platforms.create(524, 574, 'groundBrown')
  platforms.create(524, 514, 'groundBrownGreenUp')
  platforms.create(588, 638, 'groundBrown')
  platforms.create(588, 574, 'groundBrown')
  platforms.create(588, 514, 'groundBrownGreenUp')
  platforms.create(652, 638, 'groundBrown')
  platforms.create(652, 574, 'groundBrown')
  platforms.create(652, 514, 'groundBrownGreenUp')
  platforms.create(714, 638, 'groundBrownCurlyRight')
  platforms.create(714, 574, 'groundBrownCurlyRight')
  platforms.create(714, 514, 'groundBrownGreenCurlyRight')
  

  //pl2 - ground
  platforms.create(958, 638, 'groundBrownCurlyLeft')
  platforms.create(958, 574, 'groundBrownCurlyLeft')
  platforms.create(958, 514, 'groundBrownGreenCurlyLeft')
  platforms.create(1010, 638, 'groundBrown')
  platforms.create(1010, 574, 'groundBrown')
  platforms.create(1010, 514, 'groundBrownGreenUp')
  platforms.create(1074, 638, 'groundBrown')
  platforms.create(1074, 574, 'groundBrown')
  platforms.create(1074, 514, 'groundBrownGreenUp')
  platforms.create(1138, 638, 'groundBrown')
  platforms.create(1138, 574, 'groundBrown')
  platforms.create(1138, 514, 'groundBrownGreenUp')
  platforms.create(1192, 638, 'groundBrown')
  platforms.create(1192, 574, 'groundBrown')
  platforms.create(1192, 514, 'groundBrownGreenUp')
  platforms.create(1254, 638, 'groundBrown')
  platforms.create(1254, 574, 'groundBrown')
  platforms.create(1254, 514, 'groundBrownGreenUpCurlyUpRight')
  platforms.create(1318, 638, 'groundBrown')
  platforms.create(1318, 574, 'groundBrown')
  platforms.create(1318, 514, 'groundBrownCornerLeft')
  platforms.create(1318, 450, 'groundBrownCurlyLeft') // little shorter 63 (all curly left and right)
  platforms.create(1318, 386, 'groundBrownCurlyLeft')
  platforms.create(1318, 322, 'groundBrownGreenCurlyLeft')
  platforms.create(1380, 638, 'groundBrown')
  platforms.create(1380, 574, 'groundBrown')
  platforms.create(1380, 514, 'groundBrown')
  platforms.create(1380, 450, 'groundBrown')
  platforms.create(1380, 386, 'groundBrown')
  platforms.create(1380, 322, 'groundBrownGreenUp')
  platforms.create(1444, 638, 'groundBrown')
  platforms.create(1444, 574, 'groundBrown')
  platforms.create(1444, 514, 'groundBrown')
  platforms.create(1444, 450, 'groundBrown')
  platforms.create(1444, 386, 'groundBrown')
  platforms.create(1444, 322, 'groundBrownGreenUp')
  platforms.create(1508, 638, 'groundBrown')
  platforms.create(1508, 574, 'groundBrown')
  platforms.create(1508, 514, 'groundBrown')
  platforms.create(1508, 450, 'groundBrown')
  platforms.create(1508, 386, 'groundBrown')
  platforms.create(1508, 322, 'groundBrownGreenUp')
  platforms.create(1572, 638, 'groundBrown')
  platforms.create(1572, 574, 'groundBrown')
  platforms.create(1572, 514, 'groundBrown')
  platforms.create(1572, 450, 'groundBrown')
  platforms.create(1572, 386, 'groundBrown')
  platforms.create(1572, 322, 'groundBrownGreenUp')
  platforms.create(1636, 638, 'groundBrown')
  platforms.create(1636, 574, 'groundBrown')
  platforms.create(1636, 514, 'groundBrown')
  platforms.create(1636, 450, 'groundBrown')
  platforms.create(1636, 386, 'groundBrown')
  platforms.create(1636, 322, 'groundBrownGreenUp') 

  // Going down now
  platforms.create(1698, 638, 'groundBrown')
  platforms.create(1696, 574, 'groundBrownCornerRight')
  platforms.create(1696, 514, 'groundBrownCurlyRight')
  platforms.create(1696, 450, 'groundBrownCurlyRight')
  platforms.create(1696, 386, 'groundBrownCurlyRight')
  platforms.create(1696, 322, 'groundBrownGreenCurlyRight') // Clef
  platforms.create(1760, 638, 'groundBrown')
  platforms.create(1760, 574, 'groundBrownGreenUpCurlyUpLeft')
  platforms.create(1824, 638, 'groundBrown')
  platforms.create(1824, 574, 'groundBrownGreenUp')
  platforms.create(1888, 638, 'groundBrown')
  platforms.create(1888, 574, 'groundBrownGreenUp')
  platforms.create(1952, 638, 'groundBrown')
  platforms.create(1952, 574, 'groundBrownGreenUp')
  platforms.create(2016, 638, 'groundBrown')
  platforms.create(2016, 574, 'groundBrownGreenUp')
  platforms.create(2080, 638, 'groundBrown')
  platforms.create(2080, 574, 'groundBrownGreenUp')
  platforms.create(2144, 638, 'groundBrown')
  platforms.create(2144, 574, 'groundBrownGreenUp')
  platforms.create(2208, 638, 'groundBrown')
  platforms.create(2208, 574, 'groundBrownGreenUp')
  platforms.create(2272, 638, 'groundBrown')
  platforms.create(2272, 574, 'groundBrownGreenUp') // End sign
  platforms.create(2336, 638, 'groundBrown')
  platforms.create(2336, 574, 'groundBrownGreenUp')
  platforms.create(2400, 638, 'groundBrown')
  platforms.create(2400, 574, 'groundBrownGreenUp')
  platforms.create(2464, 638, 'groundBrown')
  platforms.create(2464, 574, 'groundBrownGreenUp')
  platforms.create(2528, 638, 'groundBrown')
  platforms.create(2528, 574, 'groundBrownGreenUp')
  platforms.create(2592, 638, 'groundBrown')
  platforms.create(2592, 574, 'groundBrownGreenUp')
  platforms.create(2656, 638, 'groundBrown')
  platforms.create(2656, 574, 'groundBrownGreenUp')
  platforms.create(2720, 638, 'groundBrown')
  platforms.create(2720, 574, 'groundBrownGreenUp')
  platforms.create(2784, 638, 'groundBrown')
  platforms.create(2784, 574, 'groundBrownGreenUp')


  platforms.refresh()

  return platforms
}
