import ActionTileContainer from "../components/ActionTileContainer";

import * as ICONS from '../images/index'

function Home() {
    const movementTiles = [
        {icon: ICONS.moveIcon, title: "Move", shortDescription: "Cost: 1ft to 1ft", longDescription: "Movement with 0 modifiers matches your movement speed on your character sheet.\n\nMost DND boards are in squares/hexagons, each of which correspond to 5ft of movement. The average movement speed for player characters is 30ft, which would allow you to move 6 tiles in any direction (including diagonal in the case of squares)."},
        {icon: ICONS.climbIcon, title: "Climb", shortDescription: "Cost: 2ft per 1ft", longDescription: "..."},
        {icon: ICONS.swimIcon, title: "Swim", shortDescription: "Cost: 2ft per 1ft", longDescription: "..."},
        {icon: ICONS.crawlIcon, title: "Crawl", shortDescription: "Cost: 2ft per 1ft", longDescription: "..."},
        {icon: ICONS.standUpIcon, title: "Stand up", shortDescription: "Cost: half movement speed", longDescription: "..."},
        {icon: ICONS.highJumpIcon, title: "High jump", shortDescription: "todo", longDescription: "..."},
        {icon: ICONS.longJumpIcon, title: "Long jump", shortDescription: "todo", longDescription: "..."},
        {icon: ICONS.improviseIcon, title: "Improvise", shortDescription: "Any stunt not on this list", longDescription: "This will typically be up to the DM to decide how to handle your improvisation. Maybe you 'skip' to a location, or maybe you roll like Sonic as a Tortle."},
        {icon: ICONS.difficultTerrainIcon, title: "Difficult terrain", shortDescription: "Cost modifier: +5ft per 5ft", longDescription: "..."}
    ]
    const combatActionTiles = [
        {icon: ICONS.meleeIcon, title: "Melee Attack", shortDescription: "Held weapon attack", longDescription: "Attack with a hand held weapon within 5ft of reach.\n\nIf you have the 'reach' feature on your weapon, this can be extended to the reach notated under the 'reach' feature."},
        {icon: ICONS.rangedAttackIcon, title: "Ranged Attack", shortDescription: "Weapons such as bows/crossbows", longDescription: "Your weapon will have two ranges on it, regular and long range. Exceeding regular range will grant you disadvantage on your attack roll. You cannot attack a target beyond the long range.\n\nClose quarters is defined as being within 5ft of a creature. If you use a ranged attack within close quarters and the creature you're attacking is not incapacitated, you will roll with disadvantage.\n\nExample, a hand crossbow typically has a range of 30/120ft. Shooting at 5ft will grant you disadvantage per close quarters rules. Shooting between 10-30ft will be a normal roll. Shooting from 35-120ft will be at disadvantage per long range rules. Any further than 120ft is considered not possible."},
        {icon: ICONS.unarmedStrikeIcon, title: "Unarmed Strike", shortDescription: "Weaponless damage, grappling, or shoving", longDescription: "To hit: Strength Modifier + Proficiency Bonus\nOn hit, choose to either damage, grapple, or shove.\n\nDAMAGE: 1 + STR modifier, Bludgeoning Damage\n\nGRAPPLE: The target must be no more than one size larger than you, and you must have one hand free. Target STR or DEX save (of target's choice) vs. attacker's DC (8 + STR modifier + Proficiency Bonus). See Grappled Condition for more information on when you are actively grappled.\n\nSHOVE: Possible only if the target is no more than one size larger. Target STR or DEX save (target choice) vs. attacker's DC (8 + STR modifier + Proficiency Bonus). Knock target prone or push 5ft."},
        {icon: ICONS.castSpellIcon, title: "Cast Spell", shortDescription: "Cast time states '1 action'", longDescription: "Cast time of spell must state '1 action' in battle.\n\nIf you have the ability to give yourself another action, you cannot cast two leveled spells in one turn. Likewise, you cannot cast a leveled spell as an action as well as a leveled spell as a bonus action in the same turn.\n\nMixmatching cantrips and leveled spells are fine."},
        {icon: ICONS.dashIcon, title: "Dash", shortDescription: "Double Movement Speed", longDescription: "Grant yourself double your max movement speed.\n\ne.g., 30ft base movement speed turns into 60ft of movement when dashing. Even if you wait to dash until you already spent 25ft of movement, you will still be granted another 30ft of movement."},
        {icon: ICONS.dodgeIcon, title: "Dodge", shortDescription: "Stand your current ground", longDescription: "Attacks against you will have disadvantage until your next turn.\n\nDexterity saving throws will have advantage until your next turn."},
        {icon: ICONS.helpIcon, title: "Help", shortDescription: "Give a target advantage", longDescription: "Target another combatant (typically an ally), grant them advantage on their next check or attack."},
        {icon: ICONS.hideIcon, title: "Hide", shortDescription: "DC15 Stealth Check", longDescription: "Roll for a DC15 stealth check. Must be heavily obscured or behind at least 3/4 cover."},
        {icon: ICONS.influenceIcon, title: "Influence", shortDescription: "Alter a creature's attitude", longDescription: "Attempt to use your deception, intimidation, performance, persuasion, or animal handling to alter a creature's attitude. DC may already be defined, or may be chosen by the DM based on the creature."},
        {icon: ICONS.readyIcon, title: "Ready", shortDescription: "Decide Trigger and Reaction", longDescription: ""},
        {icon: ICONS.searchIcon, title: "Search", shortDescription: "Roll to find something", longDescription: "Attempt to use your insight, medicine, perception, or survival to search for something around your. DC may already be defined, or may be chosen by the DM based on the area."},
        {icon: ICONS.studyIcon, title: "Study", shortDescription: "Context clues and Knowledge", longDescription: "Attempt to use your arcana, history, investigation, nature, or religion to study something around you. This may be studying a relic with magical power to understand what power it brings, or study the room for any clues on what might aide you. DC may already be defined, or may be chosen by the DM based on the area."},
        {icon: ICONS.utilizeIcon, title: "Utilize", shortDescription: "Use a non-magical object", longDescription: "Using any non-magical object, such as an item."},
    
    ]
    const combatBonusActionTiles = [
        {icon: ICONS.castSpellIcon, title: "Cast Spell", shortDescription: "Cast time states '1 bonus action'", longDescription: "Cast time of spell must state '1 bonus action' in battle.\n\nIf you have the ability to give yourself another action, you cannot cast two leveled spells in one turn. Likewise, you cannot cast a leveled spell as an action as well as a leveled spell as a bonus action in the same turn.\n\nMixmatching cantrips and leveled spells are fine."},
        {icon: ICONS.classFeatureIcon, title: "Class Feature", shortDescription: "Specific class usage", longDescription: "Some classes have class features that can be used on a bonus action, such as Paladins having Lay On Hands.\n\nYou are allowed these in addition to your action."},
    ]
    const combatReactionTiles = [
        {icon: ICONS.opportunityAttackIcon, title: "Opportunity Attack", shortDescription: "Hostile creature moves out of reach", longDescription: "When a hostile creature moves out of your reach without disengaging, you can make an Opportunity Attack. Take your reaction (if you have one), and make one regular Melee Attack."},
        {icon: ICONS.castSpellIcon, title: "Cast Spell", shortDescription: "Cast time states '1 reaction'", longDescription: "Cast time of spell ust state '1 reaction'.\n\nThis is not limited to your own turn, but is limited to a single reaction per round. This can happen anytime another target takes an action, bonus action, or reaction.\n\nExample: A hostile target shoves one of your party members off of a cliff, you can cast 'Feather Falling' as a reaction to make sure they don't splatter the ground."},
    ]

    const conditionTiles = [
        {icon: ICONS.blindnessIcon, title: "Blinded", shortDescription: "You cannot see", longDescription: "Automatically fail any sight-dependent checks.\n\nAttacks against you have advantage.\n\nYour attacks have disadvantage."},
        {icon: ICONS.charmedIcon, title: "Charmed", shortDescription: "You are charmed", longDescription: "Cannot hurt or attack the charmer. Charmer has advantage to social checks."},
        {icon: ICONS.deafenedIcon, title: "Deafended", shortDescription: "You cannot hear", longDescription: "Automatically fail hearing-dependent checks."},
        {icon: ICONS.exhaustedIcon, title: "Exhaustion", shortDescription: "You are a level of exhausted", longDescription: "Cumulative effect, every time you receive exhaustion, you gain a level of exhaustion.\n\nSpeed reduction: Every level of exhaustion hinders your speed by 5ft multiplied by the exhaustion level. e.g., at a level of 1, you would lose 1 x 5ft speed, meaning your total speed subtracted by 5ft. For a normal character with 30ft of movement, this means at exhaustion level 1, you will have only 25ft of movement. Furthermore, if you're at, for example, level 3 exhaustion, 3 x 5ft = 15ft, so 30ft - 15ft = 15ft allowed movement per turn.\n\nD20 hinderance: Each D20 roll is reduced by 2 x Exhaustion level. Let's say you're at exhaustion level 4 and you roll a 16. 16 - (2 x 4) = 8, so your new roll is an 8.\n\nOn Exhaustion Level 6, you die.\n\nLong resting will remove 1 Exhaustion Level."},
        {icon: ICONS.frightenedIcon, title: "Frightened", shortDescription: "You are frightened", longDescription: "Disadvange to checks/attacks while the source of fear is within line of sight.\n\nCannot willingly move closer to the source of fear."},
        {icon: ICONS.grappledIcon, title: "Grappled", shortDescription: "You are grappled by a target", longDescription: "Speed is 0ft, no bonuses. Disadvantage to attacks that don't target the grappler. Ends if the grappler becomes incapacitated, or you are moved out of reach of the grappler from an effect.\n\nYou can attempt to escape a grapple as an action. Choose Acrobatics or Athletics vs. the grappler's DC (8 + STR Modifier + Proficiency Bonus).\n\nThe grappler can choose to release their target at anytime, this does not require an action."},
        {icon: ICONS.incapacitatedIcon, title: "Incapacitated", shortDescription: "You are incapacitated", longDescription: "You have no action, bonus action, or reaction.\n\nYou cannot use concentration, if you were in concentration before being incapactitated, concentration ends.\n\nYou cannot speak.\n\nIf you are incapacitated for an initiative roll, roll at disadvantage."},
        {icon: ICONS.invisibleIcon, title: "Invisible", shortDescription: "You cannot be seen", longDescription: "Your attacks have advantage.\n\nAttacks against you have disadvantage.\n\nAdvantage on initiative."},
        {icon: ICONS.paralyzedIcon, title: "Paralyzed", shortDescription: "You are paralyzed", longDescription: "Incapacitated. Your speed is 0ft. No bonuses to speed for movement.\n\nAutomatically fail any STR/DEX saves.\n\nAttacks against you have advantage.\n\nAll damage within 5ft is critical."},
        {icon: ICONS.petrifiedIcon, title: "Petrified", shortDescription: "You are petrified", longDescription: "Incapacitated. Your speed is 0ft. No bonuses to speed for movement.\n\nTurned into a solid inanimate substance with all non-magic items.\n\nWeight increases x10.\n\nAttacks against you have advantage. You resist damage and have an immunity to poisoned\n\nAutomatically fail STR/DEX saves."},
        {icon: ICONS.poisonedIcon, title: "Poisoned", shortDescription: "You are poisoned", longDescription: "Disadvantage to checks and attacks"},
        {icon: ICONS.pronedIcon, title: "Proned", shortDescription: "You are proned", longDescription: "Can only crawl, Standing up costs half of your movement speed for the round.\n\nAttacks aginst you have advantage if the attacker is within 5ft, otherwise, attacks against you have disadvantage.\n\nYour attacks have disadvantage"},
        {icon: ICONS.restrainedIcon, title: "Restrained", shortDescription: "You are restrained", longDescription: "Speed is 0ft, no bonuses.\n\nAttacks against you have advantage.\n\nYour attacks have disadvantage.\n\nDisadvantage on DEX saves."},
        {icon: ICONS.stunnedIcon, title: "Stunned", shortDescription: "You are stunned", longDescription: "Incapacitated.\n\nAutomatically fail STR/DEX saves.\n\nAttacks against you have advantage."},
        {icon: ICONS.unconsciousIcon, title: "Unconscious", shortDescription: "You are unconscious", longDescription: "Incapacitated and prone. Speed is 0ft, no bonuses.\n\nAutomatically fail STR/DEX saves.\n\nAttacks against you have advantage.\n\nAll damage within 5ft is critical."},
    ]

    const otherTiles = [
        {icon: ICONS.objectInteractionIcon, title: "Object Interaction", shortDescription: "Interact with an object", longDescription: ""},
        {icon: ICONS.deathSavesIcon, title: "Death Saves", shortDescription: "Roll to stay alive", longDescription: ""},
        {icon: ICONS.shortRestIcon, title: "Short Rest", shortDescription: "At least 1 hour", longDescription: "Use your Hit Dice to regain lost Hit Points.\n\nRestore class features that call for restoration on a short rest, such as bardic inspiration.\n\nMust be resting safely for at least an hour."},
        {icon: ICONS.longRestIcon, title: "Long Rest", shortDescription: "Full 8 hour rest", longDescription: "Regain all Hit Points and Hit Dice.\n\nRestore Ability Scores if they were otherwise impaired (i.e., if you had a temporary -2 to DEX, restore to it's original self).\n\nReduce exhaustion points by 1 if applicable.\n\nRegain all spell slots.\n\nMust be a full 8 hour rest. If a night is interrupted by an encounter, you can choose to count all time actively resting towards the rest (i.e., you rest for 4 hours, then get into a 1 hour fight, you can rest another 4 hours and still count the long rest)."},
        {icon: ICONS.carryCapacityIcon, title: "Carry Capacity", shortDescription: "How much you can carry", longDescription: "STR score x 15lbs\n\nExample: You have a 16 STR score. You can carry 16 x 15, or 240lbs.\n\nThis is for small/medium creatures, see 'Size and Strength' for more details if you are not small/medium."},
        {icon: ICONS.pushDragLiftIcon, title: "Push, Drag, Lift", shortDescription: "Moving an object", longDescription: "STR score x 30lbs.\n\nWhen dragging, lifting, or pushing weight in excess of your carrying capacity, your speed drops to 5ft.\n\nExample: You have a 16 STR score. You can push, drag, or lift anything at 16 x 30, or 480lbs. Note, that your speed will drop to 5 if you exceed your carrying capacity (STR score x 15lbs)..\n\nThis is for small/medium creatures, see 'Size and Strength' for more details if you are not small/medium."},
        {icon: ICONS.sizeAndStrengthIcon, title: "Size and Strength", shortDescription: "How size affects strength", longDescription: "For each size category above medium, your carrying capacity and push/drag/lift strength are doubled. Tiny creatures are halved.\n\nExample, You are a large character with 16 STR score. Your carry capacity would normally be 16 x 15lbs, however, you will double the amount after calculation. That would make your carry capacity ((16 x 15lbs) x 2), or 480lbs."},
    ]

    return(
        <div style={{marginTop: "10px", marginBottom: "10px"}}>
            <ActionTileContainer 
                title="Movement"
                limitation="Limited By Movement Speed"
                description="You can move at any time during your turn, so long as you have movement and aren't otherwise limited."
                tiles={movementTiles}
            />

            <ActionTileContainer 
                title="Action"
                limitation="1/Turn"
                description="Defines what is typically considered as 'one action' in combat."
                tiles={combatActionTiles}
            />

            <ActionTileContainer 
                title="Bonus Action"
                limitation="1/Turn"
                description="Defines what is typically considered as 'one bonus action' in combat."
                tiles={combatBonusActionTiles}
            />

            <ActionTileContainer 
                title="Reaction"
                limitation="1/Round"
                description="Reacting to what other creatures are doing on the field. Reaction only fills once the turn order returns to you."
                tiles={combatReactionTiles}
            />
            <ActionTileContainer 
                title="Conditions"
                limitation=""
                description="Conditions that may affect a target in a negative way."
                tiles={conditionTiles}
            />

            <ActionTileContainer 
                title="Miscellaneous"
                limitation="Dependent"
                description="Other possible things you can do in combat that don't entirely match the other categories."
                tiles={otherTiles}
            />
    </div>
    );
}

export default Home;