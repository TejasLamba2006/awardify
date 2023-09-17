const Discord = require('discord.js');
manager.on('giveawayMemberAlreadyJoined', async (giveaway, member, interaction, manager, events) => {
    // send a ephemral reply asking him he wants to leave the giveaway
    const question = await interaction.reply({
        content: 'You have already joined this giveaway. Do you want to leave it?',
        ephemeral: true,
        components: [
            new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder().setCustomId('leave').setLabel('Leave').setStyle(Discord.ButtonStyle.Danger)
            )
        ]
    });
    const filter = (i) => i.user.id === member.id;
    const collecter = await question.createMessageComponentCollector({ filter, time: 30000 });
    collecter.on('collect', async (i) => {
         // remove the member from the entrantIds
    const index = giveaway.entrantIds.indexOf(member.id);
    if (index !== -1) {
        giveaway.entrantIds.splice(index, 1);
    }
    //tell him we have removed him
    await i.reply({
        content: 'You have left the giveaway.'
    })
    })
    collecter.on('end', async (collected, reason) => {
        if (reason === 'time') {
            await question.delete();
        }
    });
   

});
