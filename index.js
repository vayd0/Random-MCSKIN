const fs = require('fs');
const minecraftApi = require('minecraft-api');
const request = require("request");

async function generateAndCreateSkin() {
    while(true){
        try {
            const prefix = ['Pixel', 'Craft', 'Block', 'Build', 'Mine', 'Crafty', 'Stone', 'Red', 'Blue', 'Green', 'Yellow', 'Rainbow', 'Diamond', 'Gold', 'Emerald', 'Iron', 'Obsidian', 'Nether', 'Lava', 'Water', 'Sky', 'Earth', 'Wind', 'Fire', 'Ice', 'Thunder', 'Lightning', 'Magic', 'Mystic', 'Enchanted', 'Mythical', 'Legendary', 'Epic', 'Ancient', 'Celestial', 'Cosmic', 'Galactic', 'Universal', 'Infinite', 'Endless', 'Eternal', 'Immortal', 'Divine', 'Holy', 'Angel', 'Heavenly', 'Savior', 'King', 'Queen', 'Knight', 'Warrior', 'Samurai', 'Ninja', 'Assassin', 'Hero', 'Champion', 'Gladiator', 'Titan', 'Conqueror', 'Overlord', 'Lord', 'Baron', 'Duke', 'Emperor', 'Pharaoh', 'Sultan', 'Shogun', 'Highness', 'Majesty', 'Wizard', 'Sorcerer', 'Magician', 'Enchanter', 'Spellcaster', 'Alchemist', 'Necromancer', 'Druid', 'Shaman', 'Priest', 'Prophet', 'Oracle', 'Diviner', 'Mystic', 'Seer', 'Fortune Teller', 'Psychic', 'Medium', 'Ghost', 'Zombie', 'Skeleton', 'Creeper', 'Ghast', 'Blaze', 'Ender', 'Dragon', 'Phoenix', 'Griffin', 'Mermaid', 'Centaur', 'Minotaur', 'Satyr', 'Faerie', 'Elf', 'Dwarf', 'Gnome', 'Troll', 'Ogre', 'Goblin', 'Hobbit', 'Wizard', 'Warlock', 'Ranger', 'Paladin', 'Fighter', 'Rogue', 'Bard', 'Cleric', 'Druid', 'Monk', 'Sorcerer', 'Wizard'];
            const suffix = ['Player', 'Master', 'Miner', 'Builder', 'Craftsman', 'Expert', 'Guru', 'Wizard', 'Ninja', 'Samurai', 'Assassin', 'Hero', 'Champion', 'Gladiator', 'Titan', 'Conqueror', 'Overlord', 'Lord', 'Baron', 'Duke', 'Emperor', 'Pharaoh', 'Sultan', 'Shogun', 'Highness', 'Majesty', 'Warrior', 'King', 'Queen', 'Knight', 'Barbarian', 'Hunter', 'Survivor', 'Adventurer', 'Explorer', 'Pioneer', 'Nomad', 'Wanderer', 'Traveler', 'Journeyman', 'Mercenary', 'Ranger', 'Paladin', 'Fighter', 'Rogue', 'Bard', 'Cleric', 'Druid', 'Monk', 'Sorcerer', 'Wizard', 'Gambler', 'Merchant', 'Trader', 'Smuggler', 'Pirate', 'Bandit', 'Thief', 'Outlaw', 'Villain', 'Criminal', 'Gangster', 'Mafia', 'Boss', 'Don', 'Enforcer', 'Hitman', 'Mercenary']

            // Génère un pseudo aléatoire en combinant un préfixe et un suffixe.
            const randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
            const randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
            const username = randomPrefix + randomSuffix;

            // Vérifie si le pseudo existe en utilisant l'API minecraft-api.
            const isExist = await minecraftApi.uuidForName(username);
            if (!isExist) {
                console.log(`Le pseudo "${username}" n'existe pas`);
                return;
            }

            // Convertit le pseudo en UUID.
            const uuid = await minecraftApi.uuidForName(username);
            // Récupère l'image du skin en utilisant l'API crafatar.
            request(`https://crafatar.com/renders/body/${uuid}`, { encoding: null }, (err, res, body) => {
                if (err) {
                    console.log('Erreur lors de la récupération de l\'avatar', err);
                    return;
                }
                fs.writeFile(`minecraft_skins/${username}.png`, body, (err) => {
                    if (err) throw err;
                    console.log(`Le fichier "${username}.png" a été créé avec succès !`);
                });
            });

        } catch (e) {
            
        }
    }
}

generateAndCreateSkin();
