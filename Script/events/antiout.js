module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস চাঁদের পাহাড়, ${name} এই মূর্খ টাকে এড করতে পারলাম না। 
সম্ভবত উনি বটকে ব্লক করেছে অথবা তার প্রাইভেসি সেটিংসের কারণে এড করা যায় না।😌 চাঁদের পাহাড় এড করতে পারলাম না তার জন্য দুঃখ প্রকাশ করছি 😓 
\n─𒀱⃝⃞⃟✡️🅱🅴🅻🅰🅻 🅱🅾🆃❤⃝⃞⃟𒀱ꪳ`, event.threadID)
   } else api.sendMessage(`শোন, ${name}, এই গ্রুপ হইলো গ্যাং!
এখান থেকে যাইতে হলে এডমিনের পারমিশন লাগে!
তুই পারমিশন ছাড়া লিভ নিছোস – তোকে আবার মাফিয়া স্টাইলে এড দিলাম। 🙅⚠️ নেক্সট টাইম বের হয়ে গেলে তোর পিছনে star চিহ্ন লাগিয়ে দেব ✡️ যদি খুবই প্রয়োজন থাকে গ্রুপ থেকে বের হওয়ার তাহলে বস চাঁদের পাহাড় ✡️✡️ এর কাছ থেকে অনুমতি নিয়ে বের হবি 🥱🥱 🪬🪬
\nꘉ̸̅̊̊̊̊̊̊̊̊̊̊̊̊̇̇̇̇̇̇̇ꘉ̸̅̊̊̊̊̊̊̊̊̊̊̊̊ꘉ̸̅̊̊̊̊̊̊̊̊ꘉ̸̅̊̊̊̊̊ꘉ̸̅̊̊ꘉ̸̅ꕹ😈ꙮB̸E̸L̸A̸L̸<>B̸O̸T̸~X̸6̸6̸6̸ꙮ✡️ꕹꘉ̸̅ꘉ̸̅̊̊ꘉ̸̅̊̊̊̊̊ꘉ̸̅̊̊̊̊̊̊̊̊ꘉ̸̅̊̊̊̊̊̊̊̊̊̊̊̊ꘉ̸̅̊̊̊̊̊̊̊̊̊̊̊̊̇̇̇̇̇̇̇       `, event.threadID);
  })
 }
}
