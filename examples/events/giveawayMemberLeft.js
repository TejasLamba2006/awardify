manager.on('giveawayMemberLeft', (giveaway, member, interaction) => {
    return member.send("That's sad, you won't be able to win the super cookie!");
});
