manager.on('giveawayRerolled', (giveaway, winners) => {
    winners.forEach((member) => {
        member.send('Congratulations, ' + member.user.username + ', you won: ' + giveaway.prize);
    });
});
