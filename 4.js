#導入Discord.py
import discord
#client是我們與Discord連結的橋樑
client = discord.Client()

#調用event函式庫
@client.event
#當機器人完成啟動時
async def on_ready()
    print('目前登入身份：',client.user)

@client.event
#當有訊息時
async def on_message(message)
    #排除自己的訊息，避免陷入無限循環
    if message.author == client.user
        return
    #如果以「say」開頭
    if message.content.startswith('say')
      #分割訊息成兩份
      tmp = message.content.split( ,2)
      #如果分割後串列長度只有1
      if len(tmp) == 1
        await message.channel.send(what the fuck？)
      else
        await message.channel.send(tmp[1])

client.run('OTY4OTA2MDQ2MjEzMDc0OTU0.YmlqEg.oXFFJNk-dTFWtFpVwW1gzWr5FR0') #TOKEN