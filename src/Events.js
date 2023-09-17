/**
 * @typedef {Object} Events
 * @property {string} GiveawayDeleted giveawayDeleted'
 * @property {string} GiveawayEnded giveawayEnded
 * @property {string} GiveawayMemberJoined giveawayMemberJoined
 * @property {string} GiveawayMemberLeft giveawayMemberLeft
 * @property {string} GiveawayRerolled giveawayRerolled
 * @property {string} GiveawayMemberAlreadyJoined giveawayMemberAlreadyJoined
 * @property {string} GiveawayMemberTryLeft giveawayMemberTryLeft
 * @property {string} GiveawayAlreadyEnded giveawayAlreadyEnded
 */

// JSDoc for IntelliSense purposes
/**
 * @type {Events}
 * @ignore
 */
module.exports = {
    GiveawayDeleted: 'giveawayDeleted',
    GiveawayEnded: 'giveawayEnded',
    GiveawayMemberJoined: 'giveawayMemberJoined',
    GiveawayMemberLeft: 'giveawayMemberLeft',
    GiveawayRerolled: 'giveawayRerolled',
    GiveawayMemberAlreadyJoined: 'giveawayMemberAlreadyJoined',
    GiveawayMemberTryLeft: 'giveawayMemberTryLeft',
    GiveawayAlreadyEnded: 'giveawayAlreadyEnded',
};


/**
 * Emitted when a giveaway was deleted.
 * @event GiveawaysManager#giveawayDeleted
 * @param {Giveaway} giveaway The giveaway instance
 *
 * @example
 * // This can be used to add logs
 * manager.on('giveawayDeleted', (giveaway) => {
 *      console.log('Giveaway with message Id ' + giveaway.messageId + ' was deleted.')
 * });
 */

/**
 * Emitted when a giveaway ended.
 * @event GiveawaysManager#giveawayEnded
 * @param {Giveaway} giveaway The giveaway instance
 * @param {Discord.GuildMember[]} winners The giveaway winners
 *
 * @example
 * // This can be used to add features such as a congratulatory message in DM
 * manager.on('giveawayEnded', (giveaway, winners) => {
 *      winners.forEach((member) => {
 *          member.send('Congratulations, ' + member.user.username + ', you won: ' + giveaway.prize);
 *      });
 * });
 */

/**
 * Emitted when someone joined a giveaway.
 * @event GiveawaysManager#giveawayMemberJoined
 * @param {Giveaway} giveaway The giveaway instance
 * @param {Discord.GuildMember} member The member who joined the giveaway
 * @param {Discord.MessageReaction|Discord.ButtonInteraction} interaction The reaction to enter the giveaway
 *
 * @example
 * // This can be used to add features such as giveaway requirements
 * // Best used with the "exemptMembers" property of the giveaways
 * manager.on('giveawayMemberJoined', (giveaway, member, reaction) => {
 *     if (!member.roles.cache.get('123456789')) {
 *          const index = giveaway.entrantIds.indexOf(member.id);
            giveaway.entrantIds.splice(index, 1);
 *          member.send('You must have this role to participate in the giveaway: Staff');
 *     }
 * });
 * @example
 * // This can be used to add features such as giveaway requirements
 * // Best used with the "exemptMembers" property of the giveaways
 * manager.on('giveawayMemberJoined', (giveaway, member, reaction) => {
 *     if (!member.roles.cache.get('123456789')) {
 *          reaction.users.remove(member.user);
 *          member.send('You must have this role to participate in the giveaway: Staff');
 *     }
 * });
 */

/**
 * Emitted when someone left a giveaway.
 * @event GiveawaysManager#giveawayMemberLeft
 * @param {Giveaway} giveaway The giveaway instance
 * @param {Discord.GuildMember} member The member who remove their reaction giveaway
 * @param {Discord.MessageReaction} reaction The reaction to enter the giveaway
 *
 * @example
 * // This can be used to add features such as a leave message in DM
 * manager.on('giveawayMemberLeft', (giveaway, member, interaction) => {
 *      return member.send('That\'s sad, you won\'t be able to win the super cookie!');
 * });
 */

/**
 * Emitted when a giveaway was rerolled.
 * @event GiveawaysManager#giveawayRerolled
 * @param {Giveaway} giveaway The giveaway instance
 * @param {Discord.GuildMember[]} winners The winners of the giveaway
 *
 * @example
 * // This can be used to add features such as a congratulatory message per DM
 * manager.on('giveawayRerolled', (giveaway, winners) => {
 *      winners.forEach((member) => {
 *          member.send('Congratulations, ' + member.user.username + ', you won: ' + giveaway.prize);
 *      });
 * });
 */

/**
 * Emitted when a member already joined a giveaway and the leave button exists
 *
 * @event GiveawaysManager#giveawayMemberAlreadyJoined
 * @param {Giveaway} giveaway - The giveaway instance.
 * @param {Discord.GuildMember} member - The member who already joined the giveaway.
 * @param {Discord.MessageReaction|Discord.ButtonInteraction} interaction - The interaction that triggered this event.
 * @param {GiveawaysManager} manager - The GiveawaysManager instance.
 * @param {Events} events - The Events enumeration containing event names.
 *
 * @example
 * // This event can be used to handle cases where a member tries to join a giveaway multiple times.
 * manager.on('GiveawayMemberAlreadyJoined', (giveaway, member, interaction, manager, events) => {
 *     // Check if the member has already joined and prevent multiple entries.
 *     if (giveaway.entrantIds.includes(member.id)) {
 *         // Notify the user that they've already joined.
 *         interaction.reply('You have already joined this giveaway.');
 *         return;
 *     }
 *
 *     // Add the member to the list of entrants.
 *     giveaway.entrantIds.push(member.id);
 *
 *     // If needed, you can remove the member from the entrantIds using the following code:
 *      const index = giveaway.entrantIds.indexOf(member.id);
 *      if (index !== -1) {
 *          giveaway.entrantIds.splice(index, 1);
 *      }
 *     
 *     // Perform other necessary actions here.
 * });
 */

/**
 * Emitted when a member attempts join a giveaway when the leave button does not exist
 *
 * @event GiveawaysManager#giveawayMemberTryLeft
 * @param {Giveaway} giveaway - The giveaway instance.
 * @param {Discord.GuildMember} member - The member attempting to leave the giveaway.
 * @param {Discord.MessageReaction|Discord.ButtonInteraction} interaction - The interaction that triggered the leave attempt.
 * @param {GiveawaysManager} manager - The GiveawaysManager instance.
 * @param {Events} events - The Events enumeration containing event names.
 *
 * @example
 * // This event can be used to handle cases where a member attempts to leave a giveaway.
 * manager.on('GiveawayMemberTryLeft', (giveaway, member, interaction, manager, events) => {
 * 
 *     
 *     // Perform other necessary actions here.
 * });
 */

/**
 * Emitted when a member attempts to join a giveaway that has already ended.
 *
 * @event GiveawaysManager#giveawayAlreadyEnded
 * @param {Giveaway} giveaway - The giveaway instance that has already ended.
 * @param {Discord.GuildMember} member - The member attempting to join the ended giveaway.
 * @param {Discord.MessageReaction|Discord.ButtonInteraction} interaction - The interaction that triggered the join attempt.
 * @param {GiveawaysManager} manager - The GiveawaysManager instance.
 * @param {Events} events - The Events enumeration containing event names.
 *
 * @example
 * // This event can be used to handle cases where a member attempts to join a giveaway that has ended.
 * manager.on('GiveawayAlreadyEnded', (giveaway, member, interaction, manager, events) => {
 *     // You can notify the member that the giveaway has already ended.
 *     member.send('Sorry, this giveaway has already ended.');
 *     
 *     // Perform other necessary actions here.
 * });
 */
