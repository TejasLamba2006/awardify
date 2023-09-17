manager.on('giveawayMemberJoined', (giveaway, member, interaction) => {
    if (!member.roles.cache.get('123456789')) {
        const index = giveaway.entrantIds.indexOf(member.id);
        giveaway.entrantIds.splice(index, 1);
        member.send('You must have this role to participate in the giveaway: Staff');
    }
});
