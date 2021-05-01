"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
class CommandsListener extends lib_1.Listener {
    constructor(client) {
        super(client);
        this.type = "message";
        this.id = "commands";
        this.owners = [];
        for (const owner of process.env.OWNERS.split(","))
            this.owners.push(owner.trim());
    }
    async exec(message) {
        if (!message.content.startsWith(process.env.PREFIX))
            return;
        const messageArray = message.content.split(/\s+/g);
        const name = messageArray[0].slice(process.env.PREFIX.length);
        const args = messageArray.slice(1);
        const command = this.client.commands.get(name);
        if (!command)
            return;
        if (command.ownerOnly && !this.owners.includes(message.author.id))
            return message.channel.send("Данную команду могут использовать только владельцы, в списке которых вы не числитесь.");
        command.exec(message, args);
    }
}
exports.default = CommandsListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlzdGVuZXJzL0NvbW1hbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0NBQXlDO0FBRXpDLE1BQXFCLGdCQUFpQixTQUFRLGNBQVE7SUFLbEQsWUFBWSxNQUFjO1FBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUxWLFNBQUksR0FBZSxTQUFTLENBQUE7UUFDNUIsT0FBRSxHQUFXLFVBQVUsQ0FBQTtRQUN2QixXQUFNLEdBQWEsRUFBRSxDQUFBO1FBSXhCLEtBQUssTUFBTSxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFNO1FBQzNELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2xELE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0QsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFNO1FBRXBCLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzdELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUZBQXVGLENBQUMsQ0FBQTtRQUV4SCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDO0NBQ0o7QUF6QkQsbUNBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCJcbmltcG9ydCB7IENsaWVudCwgTGlzdGVuZXIgfSBmcm9tIFwiLi4vbGliXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZHNMaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcbiAgICBwdWJsaWMgdHlwZTogRXZlbnRUeXBlcyA9IFwibWVzc2FnZVwiXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSBcImNvbW1hbmRzXCJcbiAgICBwdWJsaWMgb3duZXJzOiBzdHJpbmdbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IENsaWVudCkge1xuICAgICAgICBzdXBlcihjbGllbnQpXG4gICAgICAgIGZvciAoY29uc3Qgb3duZXIgb2YgcHJvY2Vzcy5lbnYuT1dORVJTLnNwbGl0KFwiLFwiKSlcbiAgICAgICAgICAgIHRoaXMub3duZXJzLnB1c2gob3duZXIudHJpbSgpKSBcbiAgICB9XG5cbiAgICBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLmNvbnRlbnQuc3RhcnRzV2l0aChwcm9jZXNzLmVudi5QUkVGSVgpKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWVzc2FnZUFycmF5ID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KC9cXHMrL2cpXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtZXNzYWdlQXJyYXlbMF0uc2xpY2UocHJvY2Vzcy5lbnYuUFJFRklYLmxlbmd0aClcbiAgICAgICAgY29uc3QgYXJncyA9IG1lc3NhZ2VBcnJheS5zbGljZSgxKVxuXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLmNsaWVudC5jb21tYW5kcy5nZXQobmFtZSlcbiAgICAgICAgaWYgKCFjb21tYW5kKSByZXR1cm5cblxuICAgICAgICBpZiAoY29tbWFuZC5vd25lck9ubHkgJiYgIXRoaXMub3duZXJzLmluY2x1ZGVzKG1lc3NhZ2UuYXV0aG9yLmlkKSlcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChcItCU0LDQvdC90YPRjiDQutC+0LzQsNC90LTRgyDQvNC+0LPRg9GCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgtC+0LvRjNC60L4g0LLQu9Cw0LTQtdC70YzRhtGLLCDQsiDRgdC/0LjRgdC60LUg0LrQvtGC0L7RgNGL0YUg0LLRiyDQvdC1INGH0LjRgdC70LjRgtC10YHRjC5cIilcbiAgICAgICAgXG4gICAgICAgIGNvbW1hbmQuZXhlYyhtZXNzYWdlLCBhcmdzKVxuICAgIH1cbn0iXX0=