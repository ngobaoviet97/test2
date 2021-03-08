const Discord = require("discord.js")



const client = new Discord.Client()



const prefix = "?"



const ms = require("ms")




client.on("message", message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return
  
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  
  if(command === "ping"){
    if(message.member.roles.cache.has("774955039956402187")){
      message.channel.send("pong")
    } else{
      message.channel.send("U don't have enough perm")
    }
    
    
  } else if(command === "discord"){
    message.channel.send("https://discord.gg/zShcXCpB")
    
    
  } else if(command === "facebook"){
    message.channel.send("https://www.facebook.com/profile.php?id=100012930829509")
    
    
  } else if(command === "youtube"){
    message.channel.send("https://www.youtube.com/channel/UC7nlEjG5ZKOtNSfgZGZ-XaA")
    
    
  } else if(command === "instagram"){
    message.channel.send("https://www.instagram.com/_vietbao97k4_/")
    
    
  } else if(command === "twitter"){
    message.channel.send("https://twitter.com/NgBoVit3")
    
    
  } else if(command === "anm"){
    if(message.member.roles.cache.has("774955039956402187")){
    const announcement = new  Discord.MessageEmbed()
    .setTitle("●▬▬▬▬▬▬▬๑۩Announcements۩๑▬▬▬▬▬▬▬●")
    .setDescription('Updating.....')
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/815535422896996353/815537708877086720/maxresdefault.jpg?width=815&height=491")
    .setFooter("SiynnBot's Announcements")
    message.channel.send(announcement)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "help-1"){
    const newEmbed1 = new  Discord.MessageEmbed()
    .setTitle("Bot Commands")
    .setDescription("Page 1/2")
    .setColor("RANDOM")
    .addFields(
      {name: "?help-(number of the page)", value: "Use this to see pages of the commands"},
      {name: "?kick", value: "Use this to kick the bad guys"},
      {name: "?ban", value: "Use this to ban the bad guys"},
      {name: "?mute", value: "Use this to mute the bad guys"},
      {name: "?mute (time)", value: "Use this to mute a guy for a certain time"},
      {name: "?unmute", value: "Use this to unmute the good people"},
      {name: "?anm", value: "Use this to make an announcement"}
    )
    .setImage("https://media.discordapp.net/attachments/815535422896996353/815537708877086720/maxresdefault.jpg?width=815&height=491")
    .setFooter("SiynnBot's Commands")
    message.channel.send(newEmbed1)
    
    
    
  } else if(command === "help-2"){
    const newEmbed2 = new  Discord.MessageEmbed()
    .setTitle("Bot Commands")
    .setDescription("Page 2/2")
    .setColor("RANDOM")
    .addFields(
      {name: "Discord", value: "[Server's Permanent Invite Link](https://discord.gg/BnNhFePmC5)"},
      {name: "Facebook", value: "[Owner's Facebook](https://www.facebook.com/profile.php?id=100012930829509)"},
      {name: "Youtube", value: "[Owner's Youtube Channel](https://www.youtube.com/channel/UC7nlEjG5ZKOtNSfgZGZ-XaA)"},
      {name: "Instagram", value: "[Owner's Instagram](https://www.instagram.com/_vietbao97k4_/)"},
      {name: "Twitter", value: "[Owner's Twitter](https://twitter.com/NgBoVit3)"},
    )
    .setImage("https://media.discordapp.net/attachments/815535422896996353/815537708877086720/maxresdefault.jpg?width=815&height=491")
    .setFooter("SiynnBot's Commands")
    message.channel.send(newEmbed2)
    
    
    
  } else if(command === "kick"){
    if(message.member.roles.cache.has("774955039956402187")){
    const member = message.mentions.users.first()
    if(member){
      const memberTarget = message.guild.members.cache.get(member.id)
      memberTarget.kick()
      message.channel.send(`<@${memberTarget.user.id}> has been kicked`)
    }else{
      message.channel.send("You couldn't kick this guy")
      }
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
    
  } else if(command === "ban"){
    if(message.member.roles.cache.has("774955039956402187")){
    const member = message.mentions.users.first()
    if(member){
      const memberTarget = message.guild.members.cache.get(member.id)
      memberTarget.ban()
      message.channel.send(`<@${memberTarget.user.id}> has been banned`)
    } else{
      message.channel.send("You couldn't ban this guy")
      }
    }else{
      message.channel.send("You don't have permission to do this")
    }
    

      
  } else if(command === "mute"){
    if(message.member.roles.cache.has("774955039956402187")){
    const target = message.mentions.users.first()
    if(target){
      let mainRole = message.guild.roles.cache.find(role => role.name === "𝓜𝓮𝓶𝓫𝓮𝓻")
      let muteRole = message.guild.roles.cache.find(role => role.name === "𝓜𝓾𝓽𝓮𝓭")
      
      let memberTarget= message.guild.members.cache.get(target.id)
      
      if(!args[1]){
       memberTarget.roles.remove(mainRole.id)
       memberTarget.roles.add(muteRole.id)
       message.channel.send(`<@${memberTarget.user.id}> has been muted`)
       return 
      }
      memberTarget.roles.remove(mainRole.id)
      memberTarget.roles.add(muteRole.id)
      message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
      
      setTimeout(function(){
        memberTarget.roles.add(mainRole.id)
        memberTarget.roles.remove(muteRole.id)
      }, ms(args[1]))
    } else{
      message.channel.send("Can't find that member")
      }
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
    
  } else if(command === "unmute"){
    if(message.member.roles.cache.has("774955039956402187")){
    const target = message.mentions.users.first()
    if(target){
      let mainRole = message.guild.roles.cache.find(role => role.name === "𝓜𝓮𝓶𝓫𝓮𝓻")
      let muteRole = message.guild.roles.cache.find(role => role.name === "𝓜𝓾𝓽𝓮𝓭")
      
      let memberTarget= message.guild.members.cache.get(target.id)
      
      memberTarget.roles.add(mainRole.id)
      memberTarget.roles.remove(muteRole.id)
      message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
    } else{
      message.channel.send("Can't find that member")
      }
    }else{
      message.channel.send("You don't have permission to do this")
    } 
    
    
  } else if(command === "rr1"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles1 = new  Discord.MessageEmbed()
    .setTitle("𝓖𝓮𝓷𝓭𝓮𝓻")
    .setDescription('')
    .setColor("RANDOM")
    .addFields(
      {name: ":female_sign:", value: "React to get **<@&815664513935605770>** role"},
      {name: ":male_sign:", value: "React to get **<@&815664585087516692>** role"},
      {name: ":rainbow_flag:", value: "React to get **<@&818036913919098910>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/701718458273890384/818034827588534272/gender.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles1)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "rr2"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles2 = new  Discord.MessageEmbed()
    .setTitle("𝓐𝓰𝓮")
    .setDescription('')
    .setColor("RANDOM")
    .addFields(
      {name: ":child:", value: "React to get **<@&815665061036163103>** role"},
      {name: ":boy:", value: "React to get **<@&815665132478136360>** role"},
      {name: ":adult:", value: "React to get **<@&815665195295834152>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/815523165237018685/818072594770952222/age.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles2)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "rr3"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles3 = new  Discord.MessageEmbed()
    .setTitle("𝓡𝓮𝓰𝓲𝓸𝓷𝓼")
    .setDescription('')
    .setColor("RANDOM")
    .addFields(
      {name: ":regional_indicator_n:", value: "React to get **<@&815664725500756028>** role"},
      {name: ":regional_indicator_e:", value: "React to get **<@&815664794623410196>** role"},
      {name: ":regional_indicator_w:", value: "React to get **<@&815664853703983145>** role"},
      {name: ":regional_indicator_s:", value: "React to get **<@&815664669083172904>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/815523165237018685/818073120678084688/regions.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles3)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "rr4"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles4 = new  Discord.MessageEmbed()
    .setTitle("𝓖𝓪𝓶𝓲𝓷𝓰")
    .setDescription('')
    .setColor("RANDOM")
    .addFields(
      {name: ":pick:", value: "React to get **<@&815665409562902539>** role"},
      {name: ":gun:", value: "React to get **<@&815665272991514665>** role"},
      {name: ":computer:", value: "React to get **<@&815665351911407627>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/815523165237018685/818073083533066250/gaming.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles4)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "rr5"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles5 = new  Discord.MessageEmbed()
    .setTitle("𝓟𝓲𝓷𝓰𝓼")
    .setDescription('')
    .setColor("RANDOM")
    .addFields(
      {name: ":tada:", value: "React to get **<@&816397143651647578>** role"},
      {name: ":mega:", value: "React to get **<@&818047657665757226>** role"},
      {name: ":video_game:", value: "React to get **<@&818047752269070347>** role"},
      {name: ":question:", value: "React to get **<@&818047856551657512>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/815523165237018685/818073082631159848/pings.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles5)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "rr6"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles6 = new  Discord.MessageEmbed()
    .setTitle("𝓒𝓸𝓵𝓸𝓻𝓼")
    .setDescription('Page 1/2')
    .setColor("RANDOM")
    .addFields(
      {name: ":snake:", value: "React to get **<@&818051509442183218>** role"},
      {name: ":dolphin:", value: "React to get **<@&818051379234078781>** role"},
      {name: ":baby_chick:", value: "React to get **<@&818051322137018390>** role"},
      {name: ":fox:", value: "React to get **<@&818051203522363403>** role"},
      {name: ":shrimp:", value: "React to get **<@&818051141770149922>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/701718458273890384/818069660641525790/colors.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles6)
    }else{
      message.channel.send("You don't have permission to do this")
    }
    
    
  } else if(command === "rr7"){
    if(message.member.roles.cache.has("774955039956402187")){
    const reactionroles7 = new  Discord.MessageEmbed()
    .setTitle("𝓒𝓸𝓵𝓸𝓻𝓼")
    .setDescription('Page 2/2')
    .setColor("RANDOM")
    .addFields(
      {name: ":pig2:", value: "React to get **<@&818051023759212584>** role"},
      {name: ":octopus:", value: "React to get **<@&818050955932073994>** role"},
      {name: ":black_cat:", value: "React to get **<@&815665558933733399>** role"},
      {name: ":shark:", value: "React to get **<@&818050841222840340>** role"},
      {name: ":polar_bear:", value: "React to get **<@&815665720032886785>** role"}
    )
    .setImage("https://media.discordapp.net/attachments/701718458273890384/818069660641525790/colors.gif")
    .setFooter("SiynnBot's ReactionRoles")
    message.channel.send(reactionroles7)
    }else{
      message.channel.send("You don't have permission to do this")
    }
  }
  
    
    
})

client.login("")
