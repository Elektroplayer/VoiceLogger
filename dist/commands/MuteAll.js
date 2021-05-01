"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
class StopCommand extends lib_1.Command {
    constructor() {
        super(...arguments);
        this.aliases = ["muteall", "mute_all", "mutevoice", "mute_voice"];
        this.help = {
            name: "mute_all",
            description: "Мьютит всех в пользователей в голосовом канале.\nТребует право мьютить в голосовом канале в котором вы находитесь.",
            usage: "mute_all"
        };
    }
    async exec(message) {
        const channel = message.member.voice.channel, guild = message.guild;
        if (!channel)
            return await message.channel.send("❌ Не пытайся меня обмануть, я знаю что ты не в войсе :)");
        if (!channel.permissionsFor(message.member).has("MUTE_MEMBERS"))
            return await message.channel.send("❌ Ну не пытайся обмануть меня, я ведь прекрасно вижу что у тебя нет прав мьютить в этом канале :(");
        if (!channel.permissionsFor(guild.me).has("MUTE_MEMBERS"))
            return await message.channel.send("❌ Я бы хотел сказать что у тебя нет прав мьютить, но сейчас нет прав у меня(");
        for (const [id, member] of channel.members) {
            if (id == message.author.id)
                continue;
            await member.edit({ mute: true });
        }
    }
}
exports.default = StopCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXV0ZUFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9NdXRlQWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0NBQWdDO0FBR2hDLE1BQXFCLFdBQVksU0FBUSxhQUFPO0lBQWhEOztRQUNXLFlBQU8sR0FBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3RFLFNBQUksR0FBVTtZQUNqQixJQUFJLEVBQUUsVUFBVTtZQUNoQixXQUFXLEVBQUUsb0hBQW9IO1lBQ2pJLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUE7SUFvQkwsQ0FBQztJQWxCRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDdEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFFM0IsSUFBSSxDQUFDLE9BQU87WUFDUixPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseURBQXlELENBQUMsQ0FBQTtRQUVoRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUMzRCxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUdBQW1HLENBQUMsQ0FBQTtRQUUxSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNyRCxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEVBQThFLENBQUMsQ0FBQTtRQUVySCxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQUUsU0FBUTtZQUNyQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtTQUNsQztJQUNMLENBQUM7Q0FDSjtBQTFCRCw4QkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlsZE1lbWJlciwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCJcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vbGliXCJcbmltcG9ydCB7IElIZWxwIH0gZnJvbSBcIi4uL2xpYi9jb21tYW5kXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBwdWJsaWMgYWxpYXNlczogc3RyaW5nW10gPSBbXCJtdXRlYWxsXCIsIFwibXV0ZV9hbGxcIiwgXCJtdXRldm9pY2VcIiwgXCJtdXRlX3ZvaWNlXCJdXG4gICAgcHVibGljIGhlbHA6IElIZWxwID0ge1xuICAgICAgICBuYW1lOiBcIm11dGVfYWxsXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcItCc0YzRjtGC0LjRgiDQstGB0LXRhSDQsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQsiDQs9C+0LvQvtGB0L7QstC+0Lwg0LrQsNC90LDQu9C1LlxcbtCi0YDQtdCx0YPQtdGCINC/0YDQsNCy0L4g0LzRjNGO0YLQuNGC0Ywg0LIg0LPQvtC70L7RgdC+0LLQvtC8INC60LDQvdCw0LvQtSDQsiDQutC+0YLQvtGA0L7QvCDQstGLINC90LDRhdC+0LTQuNGC0LXRgdGMLlwiLFxuICAgICAgICB1c2FnZTogXCJtdXRlX2FsbFwiXG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xuICAgICAgICBjb25zdCBjaGFubmVsID0gbWVzc2FnZS5tZW1iZXIudm9pY2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgZ3VpbGQgPSBtZXNzYWdlLmd1aWxkXG4gICAgICAgIFxuICAgICAgICBpZiAoIWNoYW5uZWwpXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbWVzc2FnZS5jaGFubmVsLnNlbmQoXCLinYwg0J3QtSDQv9GL0YLQsNC50YHRjyDQvNC10L3RjyDQvtCx0LzQsNC90YPRgtGMLCDRjyDQt9C90LDRjiDRh9GC0L4g0YLRiyDQvdC1INCyINCy0L7QudGB0LUgOilcIilcbiAgICAgICAgXG4gICAgICAgIGlmICghY2hhbm5lbC5wZXJtaXNzaW9uc0ZvcihtZXNzYWdlLm1lbWJlcikuaGFzKFwiTVVURV9NRU1CRVJTXCIpKVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwi4p2MINCd0YMg0L3QtSDQv9GL0YLQsNC50YHRjyDQvtCx0LzQsNC90YPRgtGMINC80LXQvdGPLCDRjyDQstC10LTRjCDQv9GA0LXQutGA0LDRgdC90L4g0LLQuNC20YMg0YfRgtC+INGDINGC0LXQsdGPINC90LXRgiDQv9GA0LDQsiDQvNGM0Y7RgtC40YLRjCDQsiDRjdGC0L7QvCDQutCw0L3QsNC70LUgOihcIilcblxuICAgICAgICBpZiAoIWNoYW5uZWwucGVybWlzc2lvbnNGb3IoZ3VpbGQubWUpLmhhcyhcIk1VVEVfTUVNQkVSU1wiKSlcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBtZXNzYWdlLmNoYW5uZWwuc2VuZChcIuKdjCDQryDQsdGLINGF0L7RgtC10Lsg0YHQutCw0LfQsNGC0Ywg0YfRgtC+INGDINGC0LXQsdGPINC90LXRgiDQv9GA0LDQsiDQvNGM0Y7RgtC40YLRjCwg0L3QviDRgdC10LnRh9Cw0YEg0L3QtdGCINC/0YDQsNCyINGDINC80LXQvdGPKFwiKVxuXG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBtZW1iZXJdIG9mIGNoYW5uZWwubWVtYmVycykge1xuICAgICAgICAgICAgaWYgKGlkID09IG1lc3NhZ2UuYXV0aG9yLmlkKSBjb250aW51ZVxuICAgICAgICAgICAgYXdhaXQgbWVtYmVyLmVkaXQoe211dGU6IHRydWV9KVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==