manager.on('GiveawayAlreadyEnded', (giveaway, member, interaction, manager, events) => {
         // You can notify the member that the giveaway has already ended.
         member.send('Sorry, this giveaway has already ended.');
         
         // Perform other necessary actions here.
     });