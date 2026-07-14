export interface AuraEvent {
  id: string;
  title: string;
  points: number;
  category:
    | "talent"
    | "luck"
    | "fail"
    | "romance"
    | "school"
    | "work"
    | "gaming"
    | "internet"
    | "sports"
    | "social";
  tier: "god" | "major" | "moderate" | "minor" | "catastrophic";
  description: string;
  analysis: string;
}

export const auraEvents: AuraEvent[] = [
  {
    id: "nailing-karaoke-song",
    title: "Nailing a Karaoke Song",
    points: 77000,
    category: "talent",
    tier: "god",
    description: "You absolutely crushed your karaoke performance and the crowd lost it.",
    analysis:
      "Karaoke is the great equalizer of social courage. Most people pick a safe song, mumble through the verses, and pray for the chorus to save them. You did none of that. You chose a song that demanded range, commitment, and a willingness to look a little foolish, and then you delivered it like you had been rehearsing for months. The room shifted. Phones came out. Someone in the back screamed a lyric back at you like you were headlining a festival. This is not just about having a good voice - it is about reading a room, timing your big note, and understanding that karaoke is theater as much as music. The 77,000 aura points reflect a rare alignment: talent, fearlessness, and audience capture. People who nail karaoke tend to be the ones who also nail job interviews, first dates, and difficult conversations, because they have learned that being slightly ridiculous in front of others is actually a superpower. Tonight, you were the main character of a bar full of strangers, and they were grateful for it. Carry that energy into Monday morning.",
  },
  {
    id: "playing-instrument-drawing-crowd",
    title: "Playing an Instrument in Public and Drawing a Crowd",
    points: 60000,
    category: "talent",
    tier: "god",
    description: "Your street performance gathered an actual crowd of strangers.",
    analysis:
      "There is a specific kind of magic that happens when a public space spontaneously reorganizes itself around a single person. You sat down with an instrument, started playing, and within minutes strangers were stopping, setting down bags, pulling out phones, and forming a loose semicircle like you had booked the venue. That transformation is pure aura. Most public performers play to people who are politely pretending not to hear them. You played to people who chose to stay. The difference is not always technical skill - sometimes it is phrasing, sometimes it is song choice, sometimes it is the way you make eye contact with a kid in the front row and turn them into your biggest fan. Sixty thousand points because this is talent with a social component baked in. You did not just demonstrate ability; you created a shared moment that strangers will remember on their commute home. The coins in your case are a bonus. The real currency is that for five minutes, you made a city block feel like a concert hall, and that is a skill no app can replicate.",
  },
  {
    id: "winning-talent-show",
    title: "Winning the School Talent Show",
    points: 45000,
    category: "talent",
    tier: "god",
    description: "You took first place in front of the entire student body.",
    analysis:
      "The talent show is a high-stakes arena disguised as a fun assembly. Hundreds of your peers are sitting in judgment, the sound system is unreliable, and the act before you just bombed so the energy in the room is weird. Walking into that and coming out with a win requires more than rehearsed material - it requires the ability to reset a room and make people forget they were uncomfortable. Forty-five thousand points because a talent show victory is public proof that you can convert nervousness into performance under real-time scrutiny. The trophy ends up in a closet eventually, but the aura compounds. Years later, someone will still bring it up at a reunion, and you will get to smile like it was nothing. The quiet advantage of winning the talent show is that it permanently rewires how risk looks to you. Once you have stood on a stage and won, the stakes of most adult situations feel manageable. You already survived the hardest version of being watched.",
  },
  {
    id: "freestyle-rap-impresses",
    title: "Freestyle Rap That Actually Impresses",
    points: 35000,
    category: "talent",
    tier: "god",
    description: "You freestyled at a party and nobody expected you to be that good.",
    analysis:
      "Freestyle rap is the most unforgiving talent test in casual social settings. There is no sheet music to hide behind, no second take, and the audience can tell instantly whether you are actually improvising or recycling bars you wrote in your bedroom. When you pulled this off, you demonstrated three things at once: a vocabulary that fires faster than your conscious thought, a sense of rhythm that adapts to whatever beat is playing, and the audacity to start a verse with no guarantee it will land. The 35,000 points reflect that this is talent with a social-risk multiplier. Most people at the party could never, and they know it, which is why the circle formed around you so fast. The unspoken aura bonus is that everyone who witnessed it now slightly re-evaluates you. The quiet coworker, the friend-of-a-friend, the person you kind of wanted to impress - they all updated their internal model of who you are. Freestyling well in public is a permanent resume line in the court of social opinion.",
  },
  {
    id: "perfect-parallel-parking",
    title: "Perfect Parallel Park on the First Try",
    points: 8000,
    category: "talent",
    tier: "major",
    description: "You slid into a tight spot flawlessly while someone watched.",
    analysis:
      "Parallel parking is one of the only adult skills where the audience is guaranteed and the grading is ruthless. A stranger on the sidewalk slowed down to watch, maybe even paused with their phone half-raised, ready to film either a disaster or a masterpiece. You gave them the masterpiece. One clean reverse, a single turn of the wheel, and you ended up exactly curbside with no correction needed. Eight thousand points because this is talent that reads as competence in the most relatable possible way. Everyone has struggled with this, everyone has anxiety about it, and watching someone do it flawlessly triggers a primal respect. The passenger in your car now trusts you a little more in all things. The stranger watching now believes the world still produces capable people. And you get to walk away from the car knowing that for thirty seconds, you were the protagonist of a very small but very real story. That quiet confidence carries into the rest of your day.",
  },
  {
    id: "solving-rubiks-cube-fast",
    title: "Solving a Rubik Cube Under 30 Seconds",
    points: 12000,
    category: "talent",
    tier: "major",
    description: "You solved the cube in front of a crowd faster than they could process.",
    analysis:
      "The Rubik cube is the original party trick, and most people who own one have never solved it without a YouTube tutorial playing at half speed. You solved it in under thirty seconds, which is fast enough that the crowd could not even follow what your hands were doing. Twelve thousand points because speedcubing is a talent that looks like magic to the uninitiated. The cube is scrambled, you stare at it for a beat, and then your hands move in a blur while everyone else is still trying to figure out which face is which. The aura multiplier here is the gap between perceived difficulty and your execution. To you it is pattern recognition and muscle memory. To them it is evidence that you possess some arcane ability they will never have. Even the skeptic who says it is just memorized algorithms walks away slightly intimidated. That is the signature of a high-aura talent: it does not matter if people understand how you did it. It only matters that they could not.",
  },
  {
    id: "cooking-restaurant-quality-meal",
    title: "Cooking a Restaurant-Quality Meal for Friends",
    points: 14000,
    category: "talent",
    tier: "major",
    description: "Your home-cooked dinner genuinely surprised everyone at the table.",
    analysis:
      "Cooking for friends is a low-bar expectation that most people clear with pasta and a jar of sauce. You cleared the bar, vaulted over it, and landed with a plate that made someone set down their phone mid-scroll to actually taste what they were eating. Fourteen thousand points because this talent blends technical skill with generosity, and generosity is an aura accelerant. The sear on the meat was correct, the seasoning was balanced, and you timed everything so it arrived hot together - a detail that separates home cooks from people who simply follow recipes. The real flex is that you made it look effortless. No frantic last-minute plating, no apologizing for the salt. You hosted, you fed, and you converted a casual hangout into a memory. The friends who ate that meal will bring it up for months, and at least one of them will quietly start trying to cook better at home because of you. Influence through dinner is a quiet kind of power.",
  },
  {
    id: "beating-chess-personal-best",
    title: "Beating a Stronger Opponent in Chess",
    points: 18000,
    category: "talent",
    tier: "god",
    description: "You beat someone rated higher than you in a game that mattered.",
    analysis:
      "Chess is one of the few arenas where talent and preparation are impossible to fake. The board does not care about your confidence or your outfit. When you beat an opponent rated above you, you proved that your pattern recognition, patience, and endgame calculation all functioned under pressure that would have made most players crack. Eighteen thousand points because upsets in chess are not flukes - they are evidence of hidden work. The hours you spent studying openings nobody asked you to study, the losses you absorbed online at two in the morning, the positions you analyzed until you saw the mate three moves deep: all of it surfaced in this single game. Your opponent shook your hand knowing they were outplayed, not unlucky. That is a specific and rare kind of respect, the kind that cannot be gifted or inherited. The aura of a chess upset is permanent because the record books remember it even when the people do not. You leveled up in the only currency chess respects: results.",
  },
  {
    id: "standup-comedy-gets-laughs",
    title: "Standup Set That Actually Gets Laughs",
    points: 22000,
    category: "talent",
    tier: "god",
    description: "You did five minutes of standup and the room genuinely laughed.",
    analysis:
      "Standup comedy is the cruelest talent test that exists because the feedback is instant and merciless. A singer can blame the monitor. A dancer can blame the floor. A comedian who is not funny has nowhere to hide - the silence is the review, and it is published live. You walked into that silence and turned it into laughter, which means your writing worked, your timing worked, and your stage presence was strong enough to make strangers trust you enough to laugh. Twenty-two thousand points because comedy is talent multiplied by courage multiplied by the ability to read a room in real time and adjust. If joke two did not land, you felt it and pivoted. If the crowd got quiet, you leaned in instead of rushing. The aura of a good set is that everyone in that room now believes you are funnier than they thought, and funnier than they are, and they are slightly intimidated by how easily you made it look. That reputation follows you into every group chat.",
  },
  {
    id: "winning-spelling-bee",
    title: "Winning the Regional Spelling Bee",
    points: 30000,
    category: "talent",
    tier: "god",
    description: "You spelled a word nobody in the room had heard of and won.",
    analysis:
      "The spelling bee is a talent competition disguised as an academic exercise. Behind the podium, it is pure theater: the long pause, the request for the definition, the slow letter-by-letter reveal while parents grip the armrests. You won by spelling a word that most adults would not even attempt, which means your rote memory, your etymology instincts, and your nerve under hot lights all aligned. Thirty thousand points because this is talent with a public-proof component. The audience saw you think. They watched your eyes track the letters in the air, watched you catch yourself before a wrong vowel, and watched you commit to the final consonant with zero hesitation. That kind of visible cognition is rare and intimidating. The aura compounds because spelling bee winners carry a permanent intellectual halo. People assume you are smart about everything, which is not always accurate but is always useful. You earned a credential that no degree can replicate: you won on a stage, with a microphone, in front of judges, on a word nobody else could handle.",
  },
  {
    id: "perfect-piano-performance",
    title: "Flawless Piano Performance from Memory",
    points: 28000,
    category: "talent",
    tier: "god",
    description: "You played a complex piece from memory without a single mistake.",
    analysis:
      "Memorized piano performance is a talent tier above sight-reading because there is no safety net. The sheet music is gone, the page-turner is gone, and every note has to come from somewhere inside you that you built through repetition and trust. You played a complex piece flawlessly, which means your muscle memory was so deeply encoded that your conscious mind could focus on expression rather than survival. Twenty-eight thousand points because the audience can feel that difference even if they cannot name it. A performance played from memory breathes differently. The dynamics are more musical, the tempo breathes with the room, and the silence between phrases lands harder because you are not scrambling to find the next bar. The aura here is not just about the notes you played - it is about the thousands of hours they represent, compressed into four minutes that made people forget to check their phones. That compression of invisible work into visible beauty is the core of high-aura talent.",
  },
  {
    id: "winning-open-mic-night",
    title: "Winning an Open Mic Night",
    points: 16000,
    category: "talent",
    tier: "god",
    description: "You performed at an open mic and the audience voted you the winner.",
    analysis:
      "Winning an open mic is a talent aura event where the audience is the judge, which makes the win more honest than a curated competition. Sixteen thousand points because the open mic is the rawest talent format - no producer, no editing, no second take, just you and a microphone and a room full of people who paid a cover charge and are deciding in real time whether you are worth their attention. The aura is in the conversion. The room started neutral. Some were on their phones. By the end, they were clapping, which means you moved the room from disengagement to engagement within your set, which is the fundamental skill of live performance. The deeper talent signal is that open mic wins are where careers start, because the people in the room include other performers, promoters, and the booker who decides who gets the next slot, and the slot after that, and the one that eventually pays. The lesson is that the open mic is not a small stage. It is the only stage where the audience is honest, and honesty is the rarest feedback in entertainment, and the feedback you got tonight is that you are good, and the good is real.",
  },
  {
    id: "catching-falling-glass",
    title: "Catching a Falling Glass Mid-Air",
    points: 10000,
    category: "luck",
    tier: "major",
    description: "A glass tipped off the table and you caught it before it hit the floor.",
    analysis:
      "Catching a falling glass is the quintessential luck event because it cannot be planned, only reacted to. The glass tips, time slows, your hand moves, and either you are a hero or you are on the floor with a broom. You were the hero. Ten thousand points because this is the universe giving you a small but undeniable sign that your reflexes and your luck are currently aligned. The aura multiplier comes from the witness factor. Someone was watching, and for a half-second they thought the glass was gone, and then your hand appeared like you had rehearsed it. They will tell the story. You will tell the story. And every retelling adds a few hundred aura points because the mythology of the catch grows with the telling. The deeper layer of this luck is what it represents: you are currently in a phase where the universe is catching things for you, or at least letting you catch them yourself. Ride that wave. Buy the lottery ticket. Send the risky text. The glass says your hands are ready.",
  },
  {
    id: "finding-money-on-ground",
    title: "Finding Cash on the Ground",
    points: 5000,
    category: "luck",
    tier: "major",
    description: "You spotted a bill on the sidewalk and it was real money.",
    analysis:
      "Finding money on the ground is the universe way of confirming you are currently on the right path, or at least walking down the correct sidewalk at the correct time. Five thousand points because the amount does not matter as much as the signal. The signal is that for one moment, the world handed you something for free, no strings, no invoice, no follow-up email asking for a review. The aura of found money is distinct from earned money because there is no labor attached to it. You did not trade hours for it. You just looked down at the right time while a hundred other people walked past. That is pure luck, and pure luck is the rarest resource in a world that runs on effort. The secondary aura comes from what you do with it. Buy someone a coffee and the luck echoes outward. Pocket it silently and the luck stays sealed. Either way, the universe cut you a check today, and the memo line read: keep your eyes open.",
  },
  {
    id: "green-light-streak",
    title: "Hitting Every Green Light",
    points: 3000,
    category: "luck",
    tier: "moderate",
    description: "You drove across town and never hit a single red light.",
    analysis:
      "A green-light streak is the most underrated luck event in daily life because it is invisible to everyone except the driver. No one is impressed. No one is filming. And yet, you crossed an entire city without stopping once, which is statistically improbable and spiritually significant. Three thousand points because this kind of luck is the universe whispering that the timing of your life is currently correct. You left at the right minute. You took the right route. Every traffic algorithm in the city aligned to keep you moving. The aura is subtle but real: you arrived early, you arrived calm, and you arrived with the quiet glow of someone who feels the universe is cooperating with them today. People who hit green-light streaks tend to make better decisions in the following hours because they are operating from a baseline of flow rather than friction. The streak ends eventually, but the feeling that the lights are on your side lasts the whole day, and that feeling is worth more than the minutes saved.",
  },
  {
    id: "winning-lottery-scratch-off",
    title: "Winning on a Lottery Scratch-Off",
    points: 25000,
    category: "luck",
    tier: "god",
    description: "You scratched a ticket and actually won a real payout.",
    analysis:
      "Winning on a scratch-off is luck in its most literal and most absurd form. You paid a few dollars for a rectangle of coated paper, scratched it with a coin or your fingernail, and the universe printed you money back. Twenty-five thousand points because this is the kind of luck that makes people around you slightly superstitious. They will ask what you did differently that morning, what you were wearing, whether you had a good feeling. The answer is nothing, and you know it, but the mythology is more fun than the truth. The aura of a lottery win is not really about the money - it is about the proof that randomness can sometimes break in your direction. Most days, randomness breaks against you in small invisible ways: the delayed train, the lost email, the cold coffee. A scratch-off win is the mirror image of all that friction, concentrated into a single moment where the universe said yes. Spend a piece of it on someone else and the luck doubles, because luck given away tends to come back with interest.",
  },
  {
    id: "rain-stops-when-you-leave",
    title: "The Rain Stops the Second You Walk Outside",
    points: 6000,
    category: "luck",
    tier: "major",
    description: "You stepped out without an umbrella and the rain quit on command.",
    analysis:
      "Weather luck is the most cinematic kind because it feels narratively choreographed. You checked the forecast, it said rain, you forgot the umbrella anyway, and the moment your foot hit the sidewalk the clouds parted like they had been waiting for your cue. Six thousand points because this kind of luck feels personal in a way that green lights do not. The weather does not know you, and yet it accommodated you. The aura is in the small triumph of being dry while the pavement is still wet, evidence that you missed something that was happening moments ago. People under awnings watched you walk past with a confused expression, and you let them wonder. The deeper luck signal is that the universe is currently willing to make exceptions for you. The rain stopped. The train waited. The door held. These are all the same phenomenon: the world pausing its ordinary cruelty for one extra second so you can pass through unbothered. Recognize the pattern and trust it.",
  },
  {
    id: "finding-parking-instantly",
    title: "Finding a Parking Spot Right in Front",
    points: 4000,
    category: "luck",
    tier: "moderate",
    description: "A spot opened up exactly where you needed it with zero circling.",
    analysis:
      "Parking luck is a daily metric of how much the city likes you on a given day. Most days, the city does not like you. You circle, you settle, you walk eight blocks in the rain. Today, a car pulled out of the front spot at the exact moment you arrived, and you slid in without even adjusting your mirrors. Four thousand points because this luck is the most relatable and therefore the most aura-dense. Everyone has suffered for parking. Everyone has paid the circling tax. Your escape from that tax today is a small injustice that everyone around you silently resents, and their resentment is the fuel that powers your aura. The deeper layer is that front-row parking tends to shift the tone of whatever you walked in for. You arrived relaxed instead of aggravated. You arrived early instead of late. You arrived with the quiet confidence of someone who did not have to fight the city for a square of asphalt, and that confidence reads as competence to everyone you meet inside.",
  },
  {
    id: "surviving-near-miss-accident",
    title: "Walking Away from a Near-Miss Accident",
    points: 90000,
    category: "luck",
    tier: "god",
    description: "Something almost went terribly wrong and you walked away untouched.",
    analysis:
      "A near-miss is the universe giving you a preview of a timeline you did not have to live in. The car ran the light, the object fell, the step slipped, and for one frame of reality, everything could have gone sideways. It did not. You are intact. Ninety thousand points because surviving a near-miss is not just luck - it is a reset of your relationship with being alive. The aura is not in the escape itself but in the afterglow. For the rest of the day, colors are slightly brighter, small annoyances are slightly less annoying, and the people you love are slightly more lovable, because you briefly visited the version of reality where they were grieving you. The deeper luck here is rarefied: the universe showed you the worst-case scenario and then put you back in the good timeline, which means you are currently living on borrowed grace. The correct response is not to post about it. The correct response is to call someone you have not called in a while, because the near-miss reminded you that the calls are not infinite.",
  },
  {
    id: "bird-poops-on-someone-else",
    title: "A Bird Poops on the Person Next to You",
    points: 7000,
    category: "luck",
    tier: "major",
    description: "You dodged the bird bomb and the stranger next to you caught it.",
    analysis:
      "There is a specific and vicious joy in watching someone else get hit by a bird while you remain clean. It is not kind, but it is human, and the aura reflects that honesty. Seven thousand points because this is luck with a built-in guilt tax that most people never pay. You laughed. You tried not to. You failed. The stranger dabbed at their shoulder with a tissue, and you offered condolences you did not mean, and then you walked away slightly more grateful for the sky. The deeper luck signal is that the bird made a choice, and the choice was not you. That is the universe siding with you against a stranger, which is a small and petty form of favor that nonetheless counts. The aura compounds if you have the grace to never mention it. Some luck is best held silently, and the silence of clean shoulders after a near-bird event is one of the small secret pleasures of being a person who happened to be standing in the correct square of sidewalk at the correct second.",
  },
  {
    id: "perfect-timing-arrival",
    title: "Arriving Exactly on Time for Everything",
    points: 4500,
    category: "luck",
    tier: "moderate",
    description: "Your entire day flowed with perfect timing across every appointment.",
    analysis:
      "Perfect-timing days are the rarest kind of luck because they require dozens of independent variables to cooperate simultaneously. The bus came when you reached the stop. The elevator opened when you pressed the button. The barista had your drink ready when you reached the counter. The meeting started when you sat down. Four thousand five hundred points because this kind of luck is not dramatic, but it is deeply satisfying. You spent a full day without waiting, without rushing, and without apologizing for being late. That absence of friction changes how you carry yourself. You move through the day with a quiet momentum that other people register as confidence, even though the truth is that the universe simply stopped putting obstacles in your path. The aura of a perfectly timed day is that it makes you believe, briefly, that you have figured something out. You have not. The timing was luck. But the confidence that luck instills is real, and it tends to attract more luck, because people who feel timed tend to be in the right places more often.",
  },
  {
    id: "getting-last-item-in-stock",
    title: "Getting the Last One in Stock",
    points: 5500,
    category: "luck",
    tier: "major",
    description: "You grabbed the final item just before someone else reached for it.",
    analysis:
      "Getting the last one in stock is a small but vivid luck event because it comes with a visible loser. Someone else reached for it, or was about to, and you got there first, or the shelf was empty except for the one in your hand. Five thousand five hundred points because this kind of luck is a reminder that abundance is not guaranteed. The store had thirty of these this morning and now there is one, and it is yours. The aura multiplier is the scarcity. The item is worth more in your hand than it ever was on the shelf, because scarcity converts ordinary objects into trophies. The deeper luck signal is that you showed up at the correct intersection of supply and demand, which is a skill the universe rewards more often than effort does. People who consistently get the last one tend to be people who trust their timing rather than fighting it. They do not over-research. They do not second-guess. They reach, they grab, and the shelf cooperates.",
  },
  {
    id: "surviving-lightning-near-strike",
    title: "Surviving a Lightning Near-Strike",
    points: 95000,
    category: "luck",
    tier: "god",
    description: "Lightning struck nearby and you were close enough to feel the charge.",
    analysis:
      "A lightning near-strike is the luck event with the highest aura payout because it is the closest a living person gets to a force that regularly kills. Ninety-five thousand points because the strike is not just luck - it is a confrontation with a threshold that most people never cross, and the crossing leaves a mark on the nervous system that takes weeks to process. The aura is in the survival, but the deeper luck signal is in the randomness. You were in a location. The lightning chose a path. The path was close to you but not through you, which is a margin measured in feet, and the margin is the difference between a story you tell for the rest of your life and a story no one tells because you are not around to tell it. The aura lesson is that near-strikes rewire your relationship with chance, permanently. After the strike, every small luck event reads as a bonus rather than a baseline, because the baseline was recalibrated the moment the thunder cracked close enough to feel in your chest.",
  },
  {
    id: "sending-screenshot-to-wrong-person",
    title: "Sending a Screenshot to the Wrong Person",
    points: -2000000,
    category: "fail",
    tier: "catastrophic",
    description: "You screenshotted a conversation and sent it back to the person in it.",
    analysis:
      "This is the single most catastrophic aura event that can occur in modern life, and it happens because the same thumb that takes the screenshot is the thumb that selects the recipient. Two million points lost because this is not a mistake you recover from. The screenshot was supposed to go to your best friend, the one who understands the context, the one who will validate your side of the story. Instead, it went to the person whose words you screenshotted, which means they now know that you discuss them, that you frame their messages for an audience, and that the relationship has a backstage you have been hiding. The aura destruction is total because the screenshot is self-incriminating evidence delivered directly to the plaintiff. There is no spin. There is no excuse. The only move is to pretend the phone was hacked, which no one believes, or to confess, which at least preserves dignity if not the relationship. The lesson is that screenshots are radioactive material. They should be handled with tongs, stored in lead, and never shipped to the wrong address.",
  },
  {
    id: "tripping-in-public",
    title: "Tripping on Nothing in Front of a Crowd",
    points: -1500,
    category: "fail",
    tier: "moderate",
    description: "You stumbled over perfectly flat ground while people watched.",
    analysis:
      "Tripping on nothing is the body way of humbling the ego at the most inconvenient possible moment. The sidewalk was flat. Your shoes were tied. Gravity was working normally. And yet, your foot decided to audition for a slapstick reel in front of an audience of strangers who were definitely looking. Fifteen hundred points lost because the aura damage is not in the trip itself but in the recovery. If you laugh, you lose a little. If you pretend it did not happen, you lose more. If you look back at the ground like it betrayed you, you lose the most, because now you have blamed the sidewalk for your own feet. The deeper fail signal is that your body forgot how to walk, which is the one skill you have had since age one. That regression is humbling. The aura can be partially recovered by the speed of your recovery stride - a quickened pace and a slight smile suggests you tripped on purpose, which is a lie, but a confident one.",
  },
  {
    id: "waving-at-someone-not-waving",
    title: "Waving at Someone Who Was Not Waving at You",
    points: -800,
    category: "fail",
    tier: "minor",
    description: "You waved back and realized too late they were waving at the person behind you.",
    analysis:
      "The false wave is a miniature social catastrophe that happens in the half-second between your hand rising and your brain catching up to the fact that the wave was not for you. Eight hundred points lost because the aura damage is not in the wave - waving is fine - but in the moment you have to pretend it was intentional. You transition the wave into a hair adjustment, or a stretch, or a casual salute to no one, and every option is worse than the last. The witnesses do not say anything, but they saw, and they will remember in the shower tonight with a small sympathetic cringe. The deeper fail here is a misread of social geometry. You assumed someone was acknowledging you, which means you assumed you mattered enough to be acknowledged, and the correction is stinging. The recovery is simple: never speak of it, never wave first, and for the next month, respond to all waves with a slow nod that could plausibly be for anyone within a forty-foot radius.",
  },
  {
    id: "calling-teacher-mom",
    title: "Calling Your Teacher Mom in Front of the Class",
    points: -3000,
    category: "fail",
    tier: "moderate",
    description: "You accidentally said mom while addressing your teacher and the class heard.",
    analysis:
      "The mom-slip is a classic fail because it exposes a psychological intimacy you did not consent to sharing. You were not thinking about your mother. Your brain just reached for the closest authority-word it had stored, and that word was mom, which means somewhere in your subconscious, the teacher occupies a parental slot. Three thousand points lost because the class will not let this go. The aura damage compounds through repetition: someone will bring it up at lunch, someone will bring it up next week, someone will bring it up at graduation. The teacher, to their credit, will pretend it was fine, but you will catch them smiling about it later, which is almost worse. The recovery requires leaning into it. Own the slip. Joke about it before anyone else can. The only way to survive the mom-slip is to preempt the mockery, because the aura is not lost in the mistake itself but in the shame you radiate afterward. Shame is the real currency here, and refusing to pay it is the only available refund.",
  },
  {
    id: "dropping-phone-in-toilet",
    title: "Dropping Your Phone in the Toilet",
    points: -5000,
    category: "fail",
    tier: "major",
    description: "Your phone slipped from your hand and landed in the bowl.",
    analysis:
      "The toilet phone drop is a fail with three layers of damage: financial, sanitary, and spiritual. Five thousand points lost because the moment the phone hits the water, you face a decision tree with no good branches. Fish it out immediately and accept the consequences to your hand and your dignity. Leave it and accept the consequences to your contacts, your photos, and your two-factor authentication. Either way, you have to explain to the genius bar what happened, and they will know, because they always know, and their face will do a thing. The deeper fail signal is that you brought the phone to a place it did not need to be, which means your relationship with the device has crossed a line. The phone is now an extension of your hand even in the bathroom, which is a confession you did not intend to make out loud. The aura recovery starts with putting the phone down before entering the bathroom for one full week, a discipline that will feel like withdrawal and will restore exactly zero of the points you already lost.",
  },
  {
    id: "replying-all-to-company-email",
    title: "Replying All to a Company-Wide Email",
    points: -8000,
    category: "fail",
    tier: "major",
    description: "You hit reply-all and sent a personal comment to the entire organization.",
    analysis:
      "The reply-all fail is unique because the damage is quantifiable: you can count the recipients, and each one is a person who now has an opinion. Eight thousand points lost because the reply-all exposes the gap between your private commentary and your public persona. The comment was probably mild, maybe even boring, but the context shift makes it catastrophic. It was meant for one friend, and it reached three hundred colleagues, and now you have to live in a workplace that knows you thought the memo was dumb, or that you find the intern attractive, or that you do not understand how the new software works. The deeper fail is the realization that your work persona was always a performance, and the reply-all just dropped the curtain mid-scene. The recovery is almost impossible. You can send a follow-up reply-all apologizing, which doubles the exposure. You can say nothing, which lets the silence interpret itself. The only true recovery is time, and a job change, in that order.",
  },
  {
    id: "caught-talking-behind-back",
    title: "Getting Caught Talking About Someone Right Behind You",
    points: -12000,
    category: "fail",
    tier: "major",
    description: "You were gossiping and the person walked up behind you mid-sentence.",
    analysis:
      "Getting caught gossiping is a fail where the damage is proportional to the specific word you were saying when they appeared. Twelve thousand points lost because the aura collapse happens in the half-second where you watch their face process what they just heard. There is no recovery move that works. If you change the subject, they know you were talking about them. If you pretend you were talking about someone else with the same name, no one believes you. If you apologize, you confirm the betrayal. The deeper fail signal is that your gossip was loud enough to be overheard, which means your discretion failed before your loyalty did. The aura lesson, which you will internalize whether you want to or not, is that gossip is a high-risk low-reward activity. The temporary bond it builds with the listener is nothing compared to the permanent rupture it creates with the subject. The only people who gossip safely are the ones who do it in soundproof rooms, and even then, the walls remember. Yours did not.",
  },
  {
    id: "snoring-loud-in-quiet-class",
    title: "Snoring Loudly During a Quiet Lecture",
    points: -2000,
    category: "fail",
    tier: "moderate",
    description: "You fell asleep and your snore echoed through the silent room.",
    analysis:
      "Snoring in a quiet space is a fail that announces itself before you can stop it. The room is holding its professional silence, the speaker is mid-sentence, and then your throat produces a sound that belongs in a sawmill. Two thousand points lost because the aura damage is not in the sleep - everyone gets tired - but in the volume. A soft doze is forgivable. A snore that interrupts the speaker is a disruption, and disruptions cost aura because they force the room to acknowledge you in a way you did not consent to. The recovery is brutal. You have to pretend to wake up naturally, which no one believes, and then you have to pretend to take notes for the rest of the session, which is a performance of attentiveness that fools no one. The deeper fail is that your body overrode your social conditioning, which means your exhaustion was severe enough to override the part of your brain that keeps you employable. The lesson is sleep, but the lesson is also boundaries. You are doing too much, and your body just told the whole room.",
  },
  {
    id: "texting-the-person-youre-discussing",
    title: "Texting About Someone to That Exact Person",
    points: -50000,
    category: "fail",
    tier: "catastrophic",
    description: "You sent a message about someone to that same person by mistake.",
    analysis:
      "Texting the wrong recipient about that recipient is the small sibling of the screenshot fail, and it is nearly as destructive. Fifty thousand points lost because the message is the evidence, the delivery, and the verdict in one motion. You typed a sentence about them, meant for someone else, and the universe routed it directly to the subject, which means they now know exactly how you talk about them when they are not in the room. The aura damage scales with the content. If it was mild, the relationship survives with a scar. If it was honest, the relationship does not survive. The deeper fail is that your contacts list is a minefield and you navigated it while distracted, which is how most social catastrophes happen. The recovery is limited to one move: a follow-up message that says nothing defensive and everything accountable. Anything beyond that is digging. The real lesson is that texting while emotional is the modern equivalent of drunk driving - the odds are usually fine, and the one time they are not, the damage is permanent.",
  },
  {
    id: "walking-into-glass-door",
    title: "Walking Into a Clean Glass Door",
    points: -2500,
    category: "fail",
    tier: "moderate",
    description: "You walked face-first into a door you thought was open.",
    analysis:
      "Walking into a glass door is a fail where the physical pain is secondary to the social pain. Your nose hurts, yes, but the real wound is that the entire lobby saw you mistake a wall for a doorway. Two thousand five hundred points lost because the glass door fail is universally funny, which means it will be universally retold. The security guard will mention it to the next guard. The receptionist will mention it to the next receptionist. You have become a piece of building folklore, a warning story about the importance of Windex. The deeper fail signal is that you were moving too fast for your environment. You were not scanning. You were walking with the confidence of someone who expected the path to be clear, and the universe corrected that expectation with a pane of tempered glass. The recovery is almost impossible because the only thing worse than walking into a glass door is walking into the same glass door twice, which means your only move is to slow down and start using your eyes.",
  },
  {
    id: "crush-texting-first",
    title: "Your Crush Texts You First",
    points: 15000,
    category: "romance",
    tier: "god",
    description: "The person you have been thinking about sent the first message.",
    analysis:
      "When your crush texts first, the entire power dynamic of the situationship inverts in a single notification. Fifteen thousand points because this is not just romance - it is validation delivered via push notification. You have been calculating reply times, drafting and deleting messages, and generally behaving like a strategist in a war you were not sure you were winning. Then your phone buzzed, and their name was on the screen, and they reached out first, which means they were thinking about you while you were thinking about them, and neither of you knew it. The aura multiplier is the asymmetry. Most people never get confirmation that their crush was reciprocal. They live in ambiguity forever, or until the crush fades. You got confirmation, which is rarer than the romance itself. The deeper layer is that being texted first changes how you carry yourself for the next forty-eight hours. You walk differently. You reply to other messages faster. You are slightly kinder to strangers, because the world just told you that you are wanted.",
  },
  {
    id: "matching-with-crush-on-dating-app",
    title: "Matching With Your Crush on a Dating App",
    points: 18000,
    category: "romance",
    tier: "god",
    description: "You swiped on your crush and the app said they swiped back.",
    analysis:
      "Matching with your actual crush on a dating app is the algorithm confirming what your hope refused to believe. Eighteen thousand points because this is a dual revelation: they are on the app, which means they are single, and they swiped right, which means they are interested. The aura is in the collapse of uncertainty. For weeks you have been carrying two contradictory beliefs - they like you, they do not like you - and the green checkmark ended the debate in one screen. The deeper romance signal is that they saw your profile, your photos, your bio, your prompts, and they made a deliberate choice to signal interest, which is a more honest form of attraction than a polite text. They evaluated you as a product and they added you to their cart. The recovery period is zero. You match, you message, and the next forty-eight hours are the most important forty-eight hours of your romantic quarter, because the match is a window, not a door, and windows close faster than doors.",
  },
  {
    id: "first-kiss",
    title: "A Genuinely Good First Kiss",
    points: 22000,
    category: "romance",
    tier: "god",
    description: "Your first kiss with someone actually went well.",
    analysis:
      "First kisses are high-variance events. Most are awkward, some are bad, and a rare few are so right that they rewire your taste in people for years afterward. Twenty-two thousand points because a good first kiss is the moment where speculation becomes confirmation. You thought there was chemistry. Now you know. The aura is in the alignment: the timing, the angle, the breath, the pull-back pause where you both decided whether to go again. When all of those align, the kiss becomes a reference point. Every future kiss will be measured against it, and most will fall short. The deeper romance signal is that a good first kiss is rarely accidental. It usually means you both waited long enough for the tension to build, which means you both have restraint, which is an underrated romantic virtue. The kiss itself is the reward for that restraint. The aura compounds because good first kisses tend to become good first relationships, and good first relationships tend to become good patterns, and good patterns are the only thing that makes love sustainable.",
  },
  {
    id: "partner-remembers-tiny-detail",
    title: "Your Partner Remembers a Tiny Detail",
    points: 12000,
    category: "romance",
    tier: "major",
    description: "They referenced something small you mentioned once, months ago.",
    analysis:
      "When a partner remembers a throwaway detail you said once, it is evidence that they were listening even when you thought no one was. Twelve thousand points because this kind of memory is the romantic equivalent of a trust fund - it pays out quietly for years. The detail was probably small. The way you take your coffee. A book you mentioned in passing. A fear you voiced at two in the morning and forgot by breakfast. They stored it, and they retrieved it at the correct moment, which means their attention is not performative. The deeper romance signal is that memory is the truest form of love language, because it cannot be faked and it cannot be rushed. Gifts can be bought. Words can be rehearsed. But remembering that you prefer the window seat, or that you hate cilantro, or that your sister birthday is next week - that is attention that has been paying quiet compound interest. The aura is in the proof that someone is building a model of you in their head, and the model is accurate.",
  },
  {
    id: "getting-dumped",
    title: "Getting Dumped Out of Nowhere",
    points: -30000,
    category: "romance",
    tier: "catastrophic",
    description: "The relationship ended and you did not see it coming.",
    analysis:
      "Getting dumped without warning is an aura event that operates on a delay. The first day is shock, which is numb. The aura loss hits on day three, when you realize they are not coming back, and it compounds for weeks. Thirty thousand points lost because the damage is not just the loss of the person but the loss of the future you had already built in your head. You were scheduling them into next quarter. You were mentioning them to your parents. You were carrying a shared calendar, and now the calendar has one name on it instead of two. The deeper fail signal is that you misread the relationship, which means your romantic judgment is currently unreliable, which means the next few months of dating will be shadowed by doubt. The recovery is slow and non-linear. Some days you will feel fine. Some days you will feel the loss in a grocery store, in a song, in a restaurant they would have liked. The aura returns in fragments, usually through other people who remind you that you were a person before the relationship and you will be a person after it.",
  },
  {
    id: "left-on-read-24-hours",
    title: "Being Left on Read for Over 24 Hours",
    points: -4000,
    category: "romance",
    tier: "moderate",
    description: "They saw your message and did not respond for a full day.",
    analysis:
      "Being left on read is a slow-burn aura drain because the damage accrues in the hours, not the moment. Four thousand points lost because the silence is ambiguous, and ambiguity is worse than a no. You sent a message. They opened it. The read receipt confirmed they saw it. And then the clock started, and the clock is the enemy. Every hour without a reply is an hour your brain generates a new theory: they are busy, they are thinking, they are not interested, they are with someone else. The aura loss is not in the absence of reply - it is in the spiral the absence creates. The deeper fail signal is that you sent a message that required a response, which means you handed your emotional state to someone who did not accept delivery. The recovery is to stop checking. Put the phone in a drawer. The reply, if it comes, will come at its own speed, and watching the screen will not accelerate it. The only move that preserves aura is to behave as if the message was never sent, which is a lie, but a useful one.",
  },
  {
    id: "getting-stood-up",
    title: "Getting Stood Up on a Date",
    points: -15000,
    category: "romance",
    tier: "catastrophic",
    description: "You showed up and they did not, and they never explained.",
    analysis:
      "Getting stood up is a fail that combines rejection with humiliation in a public setting, which is the worst possible cocktail. Fifteen thousand points lost because the damage is twofold: they did not value you enough to show, and they did not respect you enough to cancel. You sat at a table, or a bar, or a park bench, and you waited past the point where waiting was dignified, and the waiter eventually asked if you were expecting someone, which is the moment the aura left the building. The deeper fail signal is that you trusted their word, which means your trust calibration is off, which means you will be slightly more guarded on the next date, and the next date will feel that guard, and the cycle compounds. The recovery is to leave the venue the moment it is clear they are not coming, to not wait for an explanation, and to treat the absence as the answer. The aura returns slowly, usually through a different person who shows up on time and apologizes for the traffic.",
  },
  {
    id: "proposal-accepted",
    title: "Your Proposal Was Accepted",
    points: 80000,
    category: "romance",
    tier: "god",
    description: "You asked and they said yes, in front of people who mattered.",
    analysis:
      "A proposal acceptance is the highest-stakes romantic event because it is a single question with a binary answer, delivered in a setting where retreat is impossible. Eighty thousand points because the yes is not just romance - it is a public declaration that this person wants to build a life with you, witnessed by the people who will hold you to it. The aura is in the courage of the ask. You knelt, or you spoke, or you held out a ring, and for one to ten seconds the entire future of your life hung in someone else mouth. They said yes, which means the gamble paid, which means your read on the relationship was correct, which is a rare and powerful validation. The deeper romance signal is that a proposal is the one moment where love becomes a contract, and contracts are the infrastructure that lets love survive its own emotions. The aura compounds because a yes at a proposal is a permanent story, retold at every anniversary, every dinner party, every reunion, and each retelling deposits a fresh layer of aura into the account you opened the moment they said yes.",
  },
  {
    id: "ex-reaching-out",
    title: "Your Ex Reaches Out of Nowhere",
    points: 8000,
    category: "romance",
    tier: "major",
    description: "An ex you have not heard from in months sent a message.",
    analysis:
      "When an ex reaches out, the aura moves are entirely dependent on how you respond, but the initial contact itself is worth eight thousand points because it confirms that you are still occupying space in someone head who is no longer in your daily life. The message will be casual. A hey, a thinking of you, a question that is really a statement. The aura is in the proof that absence did not erase you. They scrolled past other names to find yours, and they typed, and they sent, which is a small act of courage on their end and a small act of power on yours. The deeper romance signal is that the reach-out is rarely about reconnection - it is usually about validation. They are checking if you are still there, the way you check if a light is still on. The response determines the next move. A warm reply opens a door. A cold reply closes it. A no reply is its own message, and it is the one that preserves the most aura, because silence from you confirms that you have moved on, and moving on is the highest-aura romantic move available to a person who has been left.",
  },
  {
    id: "situationship-ends-cleanly",
    title: "A Situationship Ends Without Drama",
    points: 6000,
    category: "romance",
    tier: "major",
    description: "You both acknowledged it was over and there was no fallout.",
    analysis:
      "A clean situationship ending is a romance event that does not feel romantic in the moment but pays aura dividends for years. Six thousand points because most situationships end in chaos: ghosting, accusation, the slow fade that turns into resentment. Yours ended with a conversation, an acknowledgment, and a parting that did not require a group chat debrief. The aura is in the maturity. You demonstrated that you can hold something lightly enough to set it down without breaking it, which is a skill most people develop only after several disasters. The deeper romance signal is that clean endings make clean beginnings possible. Because you did not torch this bridge, the next person you date will not inherit a pile of unprocessed wreckage. You will show up to the next relationship slightly more capable of honesty, slightly more willing to name what you want, and slightly less afraid of the conversation that ends things. That capability is the long-tail aura of a clean break, and it is worth more than the points you banked the day the situationship ended.",
  },
  {
    id: "acing-test-without-studying",
    title: "Acing a Test You Did Not Study For",
    points: 20000,
    category: "school",
    tier: "god",
    description: "You walked into the exam blind and walked out with the top score.",
    analysis:
      "Acing a test without studying is the school equivalent of a green-light streak - it is luck and latent talent conspiring at the same intersection. Twenty thousand points because the aura is not in the score, which is just a number. The aura is in the look on everyone else face when the curve breaks in your favor and they ask how long you studied and you have to decide whether to lie. The deeper school signal is that you absorbed the material through osmosis, which means your baseline attention during class was high enough to substitute for hours of cramming. That is a real skill, even if it looks like laziness. The aura compounds because teachers remember the students who ace tests without apparent effort, and that memory translates into recommendations, into slack, into the benefit of the doubt on every borderline grade for the rest of the year. The warning, which you will ignore, is that osmosis has a ceiling. The material gets harder. The osmosis stops working. The students who studied will catch up, and the students who did not will have to learn how, late, under pressure.",
  },
  {
    id: "teacher-uses-your-essay-as-example",
    title: "The Teacher Reads Your Essay to the Class",
    points: 16000,
    category: "school",
    tier: "god",
    description: "Your essay was used as the model example in front of your peers.",
    analysis:
      "When a teacher reads your work aloud as the example, they are publicly endorsing your thinking, which is a form of aura transfer that no grade can replicate. Sixteen thousand points because the endorsement is not just about the writing - it is about the ideas. The teacher chose your sentences to demonstrate what good thinking looks like, which means your reasoning was clearer than thirty other people reasoning, and now all thirty of them know. The aura multiplier is the visibility. Grades are private. Examples are public. Your essay just became the benchmark, and benchmarks create expectations, which is both a gift and a burden. The deeper school signal is that the teacher now has a model of you as a strong writer, and that model will shade how they read everything you submit afterward, which is a halo that compounds quietly for the rest of the semester. The aura lesson is that writing well in school is not just about the assignment. It is about being the person whose work gets quoted, which is a form of intellectual authority that follows you out of the classroom.",
  },
  {
    id: "getting-caught-cheating",
    title: "Getting Caught Cheating on a Test",
    points: -25000,
    category: "school",
    tier: "catastrophic",
    description: "You were caught and the consequences are now on your record.",
    analysis:
      "Getting caught cheating is a school fail where the damage is not the zero on the test but the permanent reclassification of your character. Twenty-five thousand points lost because the teacher now has a new model of you, and that model is not the one you built over the semester. The aura collapse is in the reclassification. You were a student. Now you are a student who cheated, which is a subset with worse letters of recommendation, worse benefit of the doubt, and worse chances on every borderline call for the rest of the year. The deeper fail signal is that you decided the shortcut was worth the risk, which means you undervalued your own reputation, which is the most expensive thing you own. The recovery is slow and requires the opposite of the instinct: total transparency, total accountability, and a willingness to earn back trust through visible work rather than clever talk. The lesson is that the grade you were chasing was worth a fraction of the aura you just spent, and the trade was bad, and the market does not allow refunds.",
  },
  {
    id: "failing-a-class",
    title: "Failing a Class You Thought You Could Pass",
    points: -18000,
    category: "school",
    tier: "catastrophic",
    description: "The final grade came back and it was a fail.",
    analysis:
      "Failing a class is a school fail that hits harder than cheating because there is no moral failure to explain it. Eighteen thousand points lost because the fail is pure evidence: you did not understand the material, or you did not do the work, or both, and the grade is the receipt. The aura damage is in the story you have to tell. To parents, to advisors, to yourself. The story requires honesty, and honesty about a failure is one of the most aura-expensive conversations available. The deeper fail signal is that you misjudged your own comprehension, which is a meta-skill more important than the subject itself. Students who know what they do not know rarely fail. Students who fail are usually students who thought they were fine, which means the failure is a correction of a self-assessment that was wrong. The recovery is to retake the class, or to take a different class, or to accept that this subject is not your domain, which is a useful piece of information even if it costs eighteen thousand points to acquire. The aura returns when you stop pretending to be good at everything and start being honest about where you actually excel.",
  },
  {
    id: "valedictorian-speech",
    title: "Delivering the Valedictorian Speech",
    points: 70000,
    category: "school",
    tier: "god",
    description: "You stood at graduation and addressed your entire class.",
    analysis:
      "The valedictorian speech is the single highest-aura school event because it combines academic primacy with public speaking with a captive audience of everyone who has ever known you. Seventy thousand points because you earned the podium through four years of visible work, and then you earned the room through a speech that had to be good, because a bad valedictorian speech is remembered longer than a good one. The aura is in the dual achievement. You were the best student, and you were the best speaker among the best students, which is a narrow intersection that very few people occupy. The deeper school signal is that the valedictorian speech is the one school moment that follows you into adulthood. It goes on the resume. It gets quoted at family dinners for decades. It becomes the opening line of your origin story, and origin stories matter more than resumes because people remember them. The aura compounds because the speech is a permanent artifact. Long after the GPA fades, the recording of you standing at that podium will still be the first thing people find when they search your name.",
  },
  {
    id: "perfect-attendance",
    title: "Perfect Attendance for the Year",
    points: 9000,
    category: "school",
    tier: "major",
    description: "You showed up every single day without exception.",
    analysis:
      "Perfect attendance is an underrated school aura event because it is the one achievement that cannot be faked, crammed, or gifted. Nine thousand points because showing up every day requires a kind of consistency that intelligence cannot substitute for. You were there when you were sick, when you were tired, when the weather was bad, when you would rather have been anywhere else. The aura is in the proof that you can do something boring and unrewarded for a long time, which is a skill that school rewards but life rewards even more. The deeper school signal is that perfect attendance is a leading indicator. Students with perfect attendance tend to become adults who show up to work, who show up to relationships, who show up to the small commitments that compound into trust. The attendance certificate goes in a drawer, but the habit goes into the character, and character is the only school supply that lasts past graduation. The aura lesson is that presence is a form of love, and showing up is a form of talent, and both are worth more than the certificate they hand you on the last day.",
  },
  {
    id: "getting-detention",
    title: "Getting Detention for Something Dumb",
    points: -3500,
    category: "school",
    tier: "moderate",
    description: "You landed in detention for an offense that did not warrant it.",
    analysis:
      "Detention for a dumb reason is a school fail where the aura damage is mostly social. Three thousand five hundred points lost because the offense was minor - a dress code violation, a whispered joke, a phone visible for two seconds - and the punishment was disproportionate, which means the system flagged you as a person worth making an example of. The aura loss is in the afternoon. You sat in a room while your friends were elsewhere, and the room smelled like industrial cleaner, and the supervisor did not make eye contact, and the clock moved at half speed. The deeper fail signal is that you were visible at the wrong moment, which is a lesson in discretion that applies far beyond school. The people who avoid detention are not always better-behaved. They are better-timed. They know when to be loud and when to be invisible, and that calibration is a skill that protects aura in every environment, from classrooms to offices to family dinners. The detention ends. The calibration lesson, if you absorb it, lasts a career.",
  },
  {
    id: "group-project-carried-by-you",
    title: "Carrying a Group Project by Yourself",
    points: 7000,
    category: "school",
    tier: "major",
    description: "You did the entire group project because no one else contributed.",
    analysis:
      "Carrying a group project is a school event that feels like a fail in the moment but functions as an aura deposit in the long run. Seven thousand points because the grade is shared, but the skill is yours. You did the research, the writing, the slides, the presentation prep, and the final review, while three other names sat on the title page like they had contributed. The aura is in the competence you built. Group projects are designed to teach collaboration, but the student who carries the project learns something more valuable: how to do the whole thing alone, which is the skill that actually runs the world. The deeper school signal is that teachers know who carried the project. They always know. The slackers get a gentle grade. The carrier gets a quiet letter of recommendation that mentions leadership, initiative, and reliability, which are the three words that open doors for the next twenty years. The aura lesson is that doing more than your share is not a weakness. It is a tax you pay now to buy credibility later.",
  },
  {
    id: "being-teachers-pet",
    title: "Being Known as the Teacher Pet",
    points: -2000,
    category: "school",
    tier: "moderate",
    description: "Your peers have started calling you the teacher favorite.",
    analysis:
      "The teacher pet label is a school fail where the aura damage is social rather than academic. Two thousand points lost because the label suggests you traded peer respect for adult favor, which is a transaction that reads as desperate even when it is strategic. The aura loss is in the hallway. Classmates who used to include you now watch you approach the teacher desk with a small smile that is not friendly. The deeper fail signal is that you have made your academic success visible in a way that cannot be unplugged, and visibility breeds resentment in environments where everyone is stressed about the same grades. The recovery is counterintuitive. You cannot stop being good at the work. You can stop performing the goodness. Stop sitting in the front row every day. Stop being the first hand up. Let someone else answer. The aura returns when the excellence looks effortless rather than eager, because effortless excellence reads as talent and eager excellence reads as ambition, and peers forgive talent faster than they forgive ambition. The label fades when the performance does.",
  },
  {
    id: "skipping-class-getting-caught",
    title: "Skipping Class and Getting Caught",
    points: -4500,
    category: "school",
    tier: "moderate",
    description: "You skipped and the school called home before you could cover it.",
    analysis:
      "Skipping class and getting caught is a fail where the damage is triangular: the school knows, your parents know, and now you have to explain the same lie twice to two audiences with different values. Four thousand five hundred points lost because the skip itself was probably fine, but the catch turned it into an event. The aura loss is in the call home, which is the moment the skip stopped being a small rebellion and became a documented pattern. The deeper fail signal is that your cover story was not good enough, which means your operational security is weak, which is a skill school quietly tests and life quietly requires. The students who skip and do not get caught are not braver. They are more organized. They know the absence policies, the call lists, the timing of the front office. You skipped without doing the research, and the research would have told you that the office calls at ten in the morning, every morning, without exception. The lesson is that rebellion without logistics is just self-sabotage, and the aura tax on self-sabotage is always higher than the thrill of the skip.",
  },
  {
    id: "boss-praising-work-publicly",
    title: "Your Boss Praises Your Work Publicly",
    points: 10000,
    category: "work",
    tier: "major",
    description: "Your manager singled out your work in front of the whole team.",
    analysis:
      "Public praise from a boss is the workplace equivalent of a valedictorian speech, except it pays rent. Ten thousand points because the praise is not just recognition - it is a repositioning. Before the meeting, you were a colleague. After the meeting, you are the colleague whose work is worth naming, which is a different seat at every future table. The aura is in the visibility. Your peers heard the praise, and the praise created a small, permanent hierarchy shift that favors you in every subsequent collaboration. The deeper work signal is that the boss chose to spend social capital on you, which means they believe the investment will return, which means they are now invested in your success in a way they were not before. Praise is a down payment. The aura compounds because public praise tends to generate more public praise, as managers who see one manager endorse you are more likely to endorse you themselves. The lesson is to accept the praise cleanly, without deflection, because deflecting public praise is the most aura-destructive move available. Say thank you, sit down, and let the endorsement do its work in silence.",
  },
  {
    id: "getting-promoted",
    title: "Getting Promoted Ahead of Schedule",
    points: 35000,
    category: "work",
    tier: "god",
    description: "You were promoted faster than the standard timeline.",
    analysis:
      "A promotion ahead of schedule is the clearest workplace aura event because it is a structural change, not just a social one. Thirty-five thousand points because the promotion rewrites your title, your pay, your reporting line, and your standing in every meeting you walk into for the next year. The aura is in the asymmetry. Most people wait for the cycle. You skipped it, which means someone argued for you in a room you were not in, which is the most valuable form of professional advocacy. The deeper work signal is that the promotion is a bet. The company is betting that you will grow into the role, which means they are now watching you with elevated expectations, which is both a gift and a spotlight. The aura compounds because promotions compound. The next promotion is easier to argue for once the first one is on the record, because the first promotion is evidence that someone already vetted you at a higher level. The lesson is to treat the first six months of the new role as a second interview, because the aura of the promotion is provisional until you prove the bet was correct.",
  },
  {
    id: "getting-fired",
    title: "Getting Fired Unexpectedly",
    points: -40000,
    category: "work",
    tier: "catastrophic",
    description: "You were let go and the news landed without warning.",
    analysis:
      "Getting fired is the work fail with the longest aura half-life because the damage is both financial and narrative. Forty thousand points lost because you now have to explain the gap, and the explanation is a story you will tell to recruiters, to friends, to family, and to yourself, and the story has to be honest enough to survive follow-up questions. The aura loss is in the loss of structure. Work provides a daily shape, a social context, and a reason to set an alarm. Without it, the days blur, and blurred days drain aura faster than unemployment drains savings. The deeper fail signal is that you misread the room, which means your political instincts in that workplace were off, which is a skill no performance review teaches. The recovery is slow and requires a specific discipline: apply to jobs as if it were a job, leave the house every day, and refuse to let the firing become the centerpiece of your identity. The aura returns when you land the next role, because the next role is the proof that the firing was an event, not a verdict, and events pass.",
  },
  {
    id: "closing-big-deal",
    title: "Closing a Deal Everyone Thought Was Dead",
    points: 30000,
    category: "work",
    tier: "god",
    description: "You revived a stalled deal and brought it across the line.",
    analysis:
      "Closing a deal that everyone had written off is a work aura event with a high multiplier because the recovery is harder than the close. Thirty thousand points because you took something the team had emotionally abandoned and you made it real, which requires a combination of stubbornness, persuasion, and timing that most employees never demonstrate. The aura is in the proof. The deal was dead. You disagreed. You kept pushing, kept following up, kept adjusting the terms until the other side said yes, and the yes is now on the board, and the board remembers. The deeper work signal is that dead deals are where careers are made, because live deals are teamwork and dead deals are individual resurrection. The aura compounds because the close goes on the review, the review goes on the promotion case, and the promotion case goes on the resume that gets you the next job. The lesson is that the deals that matter are the ones no one thought could close, because those are the ones that prove you can do what the team cannot.",
  },
  {
    id: "coffee-run-for-boss",
    title: "Getting Stuck Doing the Coffee Run",
    points: -1500,
    category: "work",
    tier: "moderate",
    description: "You were voluntold to fetch coffee for the meeting.",
    analysis:
      "The coffee run is a work fail that is small in the moment but cumulative in effect. Fifteen hundred points lost because the task signals that your time is the most expendable in the room, which is a signal that colleagues internalize and repeat. The aura loss is not in the coffee. The coffee is fine. The loss is in the pattern. Once you are the coffee person, you become the lunch person, the printer person, the person whose calendar can be interrupted for logistics, and the interruptibility compounds into a reputation for being available rather than essential. The deeper fail signal is that you did not push back, which means your boundaries are soft, which is a workplace trait that gets tested and exploited. The recovery is to do the coffee once, well, and then to be visibly busy the next time the request comes, because the second coffee run is where the pattern sets. The lesson is that low-stakes tasks are where hierarchy is established, and the person who declines the coffee run is the person whose no is respected later, when the stakes are higher.",
  },
  {
    id: "emailing-wrong-client",
    title: "Emailing the Wrong Client Confidential Info",
    points: -25000,
    category: "work",
    tier: "catastrophic",
    description: "You sent a client-sensitive email to the wrong client.",
    analysis:
      "Emailing the wrong client is a work fail where the damage is regulatory, relational, and reputational all at once. Twenty-five thousand points lost because the email contained information that was not meant for the recipient, which means you have just created a confidentiality incident that legal will hear about, that the affected client will hear about, and that your manager will have to explain upward. The aura collapse is in the chain of notifications. Within an hour, four people will be in a room discussing whether this is reportable, and you will be the subject of the discussion, and you will not be in the room. The deeper fail signal is that your email hygiene is weak, which is a skill that protects aura more than any technical ability. The recovery is limited to speed: report the error yourself before the client does, which converts the incident from a cover-up into a disclosure, and disclosures are punished less than discoveries. The lesson is that the send button is a weapon, and autocomplete is its safety catch, and you should treat both with the seriousness of a person who just learned that the wrong recipient can end a career.",
  },
  {
    id: "idea-stolen-by-coworker",
    title: "A Coworker Steals Your Idea",
    points: -12000,
    category: "work",
    tier: "major",
    description: "You pitched an idea and a colleague presented it as their own.",
    analysis:
      "Idea theft is a work fail where the damage is invisible to everyone except you. Twelve thousand points lost because the theft was probably not even malicious - your colleague absorbed your framing, forgot the source, and repeated it as original thought, which is how most idea theft actually works. The aura loss is in the proof problem. You cannot claim the idea back without looking petty, so you have to eat the theft and watch your contribution become someone else quarterly highlight. The deeper fail signal is that you pitched the idea in a setting without a paper trail, which means your instinct for self-attribution is underdeveloped. The recovery is to start writing things down. Send the idea in an email before you say it out loud. Put your name on the document before you share the document. The aura lesson is that ideas are currency, and currency left unattended tends to migrate, and the workplace does not punish theft - it rewards presentation. The person who says the idea in the meeting gets the credit, and the person who said it in the hallway gets nothing, and the difference is a send button.",
  },
  {
    id: "presentation-goes-perfectly",
    title: "A Presentation That Lands Perfectly",
    points: 22000,
    category: "work",
    tier: "god",
    description: "Your presentation hit every beat and the room responded.",
    analysis:
      "A perfect presentation is a work aura event where the reward is disproportionate to the time spent, because presentations are the one format where the entire org evaluates you at once. Twenty-two thousand points because the room saw you think in real time, structure an argument, handle a question, and land a close, all within a window where retreat was impossible. The aura is in the alignment. The slides were clean. The pacing was right. The joke landed. The data held up under scrutiny. These alignments are rare, and when they happen, the org updates its internal model of who you are, and that update persists into every future meeting invite. The deeper work signal is that presentations are the format where leadership is identified, because leadership is the ability to hold a room attention and direct it, which is exactly what a presentation tests. The aura compounds because a great presentation gets retold - your manager will mention it to their manager, and the mention will travel up the chain until it reaches a room where your name was previously unknown, which is how careers advance without you being in the room.",
  },
  {
    id: "oversleeping-missing-meeting",
    title: "Oversleeping and Missing a Morning Meeting",
    points: -5000,
    category: "work",
    tier: "major",
    description: "You slept through your alarm and missed a meeting that started without you.",
    analysis:
      "Oversleeping into a missed meeting is a work fail where the damage is not the absence but the explanation. Five thousand points lost because the meeting started without you, which means the meeting did not need you, which is a data point your colleagues now have and you do not. The aura loss is in the morning. You woke up to messages that had already been sent, decisions that had already been made, and a Slack thread that had already moved past your involvement. The deeper fail signal is that your reliability is now in question, which is the most expensive workplace attribute to repair, because reliability is the foundation under every other skill. The recovery is to overcommunicate for the next two weeks. Arrive early. Confirm receipts. Be visibly present in meetings where you previously coasted. The aura returns when the team stops tracking your attendance, because the moment they stop tracking is the moment they trust it again, and trust is the only workplace currency that survives a missed morning, provided you never miss a second one.",
  },
  {
    id: "quitting-dramatically",
    title: "Quitting in a Way That Burns the Bridge",
    points: -20000,
    category: "work",
    tier: "catastrophic",
    description: "You resigned in a way that made reentry impossible.",
    analysis:
      "A dramatic quit is a work fail that feels like a win in the moment and costs aura for years. Twenty thousand points lost because the bridge you burned is not just the employer - it is the managers, the colleagues, and the network that would have written your references for the next decade. The aura loss is in the small world. Industries are smaller than they look. The person you roasted on the way out will be in a meeting about you within two years, and their memory of your exit will shape their summary of your work, which is a summary you will never see and never be able to correct. The deeper fail signal is that you chose expression over strategy, which is a trade that almost never pays in professional contexts. The recovery is limited. You can rebuild the network, but you cannot rebuild the specific relationships you torched, and those relationships were the ones with the most context on your ability. The lesson is that the exit matters more than the entry. A clean resignation is a letter. A dramatic resignation is a story, and the story belongs to the people who watched you leave, not to you.",
  },
  {
    id: "clutch-1v5-fps",
    title: "Clutching a 1v5 in a Ranked Match",
    points: 14000,
    category: "gaming",
    tier: "major",
    description: "You won a round where you were the last alive against five enemies.",
    analysis:
      "A 1v5 clutch is the highest-pressure moment in competitive gaming, and the aura is in the silence that falls over the voice chat as the last enemy falls. Fourteen thousand points because the clutch is not just mechanical - it is psychological. Your team was dead. The enemy had numbers, angles, and time. You had one magazine, one position, and the knowledge that everyone was watching the kill feed. The aura is in the conversion of disadvantage into highlight. You did not win because the enemy was bad. You won because you played the situation better than five people played theirs, which is a ratio that does not happen often and that the replay will preserve forever. The deeper gaming signal is that clutches build a reputation that outlasts the match. Your teammates will mention it in the next lobby. Your opponents will remember the name. The aura compounds because clutch players get invited to better stacks, and better stacks play in higher brackets, and higher brackets are where the real aura lives. The lesson is that pressure is where reputation is minted, and the players who fold under it are the players who never get the invite back.",
  },
  {
    id: "getting-carried",
    title: "Getting Hard Carried by Your Team",
    points: -2500,
    category: "gaming",
    tier: "moderate",
    description: "Your team won but your contribution was effectively zero.",
    analysis:
      "Getting carried is a gaming fail where the scoreboard tells the truth and the victory screen tells a lie. Two thousand five hundred points lost because you received the win, the rank points, and the screen that says victory, and none of it was earned. The aura loss is in the awareness. You know. Your teammates know. The post-game lobby was quieter than it should have been, and someone looked at your stats and said nothing, which is worse than trash talk. The deeper fail signal is that you queued into a bracket you are not currently matching, which means either your rank is inflated or your performance dipped, and both require adjustment. The recovery is to play a few unranked games, recalibrate, and come back when the mechanics are sharp. The aura lesson is that rank is a number, but the number is only meaningful if you can defend it, and a rank you cannot defend is a rank that collapses the moment the carry stops carrying, which is always sooner than expected.",
  },
  {
    id: "rage-quitting",
    title: "Rage Quitting a Ranked Match",
    points: -6000,
    category: "gaming",
    tier: "major",
    description: "You left the match mid-round because you were tilted.",
    analysis:
      "Rage quitting is a gaming fail where the aura damage extends past the match into the penalty system. Six thousand points lost because the quit triggers a cooldown, a rank penalty, and a reputation flag that matchmakers use to pair you with other quitters, which is a bracket that drains aura faster than any losing streak. The deeper fail signal is that you let a moment of frustration override your long-term rank goals, which is a self-control failure that gaming punishes more harshly than losing. The recovery is to never quit mid-match again, because the penalty system tracks patterns, and patterns of quitting compound into longer bans that keep you out of the brackets where aura is earned. The aura lesson is that losing with composure is worth more than winning with rage, because composure keeps you in the match, and the match is where the rank is, and the rank is the only number the lobby respects. The players who climb are not the ones who win every round. They are the ones who stay in every round, even the ones they are losing, because staying is the only way to learn the comeback.",
  },
  {
    id: "speedrun-record",
    title: "Setting a New Speedrun Record",
    points: 45000,
    category: "gaming",
    tier: "god",
    description: "You set a new world record time for a game category.",
    analysis:
      "A speedrun record is the god-tier gaming aura event because it is a global, verifiable, permanent achievement. Forty-five thousand points because you did not just beat the game - you beat every other person who has ever tried to beat the game in this category, which is a pool of obsessed competitors who have spent years optimizing the same strats you spent years optimizing. The aura is in the proof. The run is recorded. The time is on the leaderboard. The leaderboard is public, dated, and immune to revisionism. The deeper gaming signal is that speedrunning at the record level requires a combination of skill, routing, and luck manipulation that very few humans can sustain, and the ones who can tend to become minor celebrities in their game community. The aura compounds because records beget attention, attention begets streaming opportunities, and streaming converts aura into income, which is the rarest conversion in gaming. The lesson is that records are not about the game. They are about the willingness to do the same run a thousand times for the one where every frame cooperates, and that willingness is rarer than talent.",
  },
  {
    id: "lagging-out-crucial-moment",
    title: "Lagging Out at the Crucial Moment",
    points: -4000,
    category: "gaming",
    tier: "moderate",
    description: "Your connection dropped exactly when the round was on the line.",
    analysis:
      "Lagging out at the crucial moment is a gaming fail where the damage is not your fault but the aura loss is still real. Four thousand points lost because the disconnect happened, your character stood still, and the round ended without you, and your team lost, and the loss is on your record even though the cause was a router three rooms away. The aura loss is in the unfairness. You did not underperform. Your internet did. And yet the scoreboard treats them identically, which is one of the cruelties of online gaming that every player absorbs eventually. The deeper fail signal is that your setup has a single point of failure, which means the same thing will happen again unless you fix the infrastructure. The recovery is to invest in a wired connection, to pause ranked during storms, and to accept that some aura is lost to physics rather than skill. The lesson is that the network is part of the player, and a player with a bad connection is a player whose ceiling is capped by a cable, no matter how sharp the aim.",
  },
  {
    id: "teammate-throwing",
    title: "A Teammate Throwing the Match",
    points: -5500,
    category: "gaming",
    tier: "major",
    description: "Someone on your team decided to lose on purpose.",
    analysis:
      "Having a teammate throw is a gaming fail where the aura damage is moral as much as mechanical. Five thousand five hundred points lost because you played well, the enemy played well, and the outcome was decided by one person on your team who decided the match was not worth trying, which is a betrayal that the scoreboard cannot capture. The aura loss is in the helplessness. You cannot make someone try. You can mute, you can report, you can carry, but you cannot insert effort into a teammate who has checked out, and the match will end with the loss on your record regardless. The deeper fail signal is that you queued solo into a team game, which is a risk that pays when teammates cooperate and costs when they do not. The recovery is to find a stack, because stacks filter out the throwers, and stacks are where gaming aura is actually built, because the trustworthy teammates are the ones who do not throw, and finding them is worth more than any rank you will ever reach alone.",
  },
  {
    id: "unlocking-rare-achievement",
    title: "Unlocking a Rare Achievement Few Have",
    points: 8000,
    category: "gaming",
    tier: "major",
    description: "You earned an achievement with under one percent global completion.",
    analysis:
      "A rare achievement is a gaming aura event where the proof is built into the platform. Eight thousand points because the achievement is a permanent badge that other players can see on your profile, and the percentage next to it is the evidence that you did something most did not. The aura is in the scarcity. A common achievement is a participation trophy. A rare achievement is a credential, and credentials accumulate into a profile that reads as a resume of dedication. The deeper gaming signal is that rare achievements tend to require either extreme skill or extreme persistence, and both are traits that transfer beyond the game. The player who grinds a one-percent achievement is the same kind of person who finishes a degree, who completes a marathon, who ships a project that others abandoned, because the underlying trait is the ability to do unrewarded work for a long time in pursuit of a fixed goal. The aura lesson is that rarity is the currency, and the rarest achievements are the ones nobody farmed, which means the ones that required you to actually be good, not just patient.",
  },
  {
    id: "beating-friend-10-0",
    title: "Beating Your Friend 10-0 in a Fighting Game",
    points: 6000,
    category: "gaming",
    tier: "major",
    description: "You shut out your friend in a long set and they had no answer.",
    analysis:
      "A 10-0 shutout is a gaming aura event where the damage is relational as much as ranked. Six thousand points because the score is a statement, and the statement is that the skill gap is not close, and the gap is now visible to both of you in a way that cannot be talked away. The aura is in the silence after the tenth round, which is the silence of a friend recalculating how good they thought they were. The deeper gaming signal is that long sets reveal truth in a way that single games do not. A single win can be luck. A 10-0 is data, and data is hard to argue with, which is why the friend will demand a rematch that they will probably also lose. The aura compounds because the 10-0 becomes a story in the friend group, retold with embellishment, and each retelling deposits a little more aura into your account at the expense of theirs. The lesson is to be gracious, because the shutout is permanent but the friendship does not have to be, and the player who wins 10-0 and then offers to run it back is the player who keeps both the aura and the friend.",
  },
  {
    id: "discovering-game-exploit",
    title: "Discovering a Game Exploit Before Patch",
    points: 11000,
    category: "gaming",
    tier: "major",
    description: "You found an exploit and used it before the developers fixed it.",
    analysis:
      "Discovering an exploit is a gaming aura event where the timing is everything, because the window closes the moment the patch drops. Eleven thousand points because you found something the developers missed, which is a small act of reverse-engineering that the community respects even when the developers do not. The aura is in the first-mover advantage. You used the exploit for a week, climbed the ranks, banked the wins, and then the patch erased the method but not the rewards. The deeper gaming signal is that exploit discovery requires a mindset that treats the game as a system rather than a simulation, which is a transferable skill that shows up in QA, in security, in any field that involves finding edges in designed systems. The aura lesson is that exploits are temporary but the reputation for finding them is permanent, and the player who finds one exploit tends to find the next, which makes them valuable to communities, to wikis, and to the developers who eventually hire the best exploit hunters because the best defense is the person who knows where the holes are.",
  },
  {
    id: "stream-goes-viral",
    title: "Your Stream Clip Goes Viral",
    points: 25000,
    category: "gaming",
    tier: "god",
    description: "A clip from your stream blew up and brought thousands of new viewers.",
    analysis:
      "A viral stream clip is the gaming aura event with the highest financial conversion, because views become followers and followers become subs and subs become a career. Twenty-five thousand points because the clip was not scripted, which is why it worked. The moment was real - a clutch, a rant, a reaction - and the realness is what made it travel, because audiences can smell production and they reward authenticity with attention. The aura is in the asymmetry. You were streaming to twelve people, and within forty-eight hours the clip had a million views, and the twelve became twelve thousand, and the twelve thousand will not all stay, but the ones who do will be there for years. The deeper gaming signal is that virality is a multiplier on whatever you already were. If you were good, you stay good with more eyes. If you were not, the clip fades and the audience leaves. The lesson is to keep streaming through the low-viewer weeks, because the clip that changes everything is always recorded by accident, and you cannot engineer the moment that makes you, but you can be present when it happens.",
  },
  {
    id: "deleting-thirst-trap-low-likes",
    title: "Deleting a Thirst Trap Due to Low Likes",
    points: -1000000,
    category: "internet",
    tier: "catastrophic",
    description: "You posted a selfie you thought was great and the engagement said otherwise.",
    analysis:
      "Deleting a thirst trap due to low engagement is the internet fail with the highest aura tax because it is a public admission that your self-image and the audience image of you are misaligned. One million points lost because the delete is the confession. The post itself was fine. The delete is the wound. The delete says: I checked, the number was low, and I could not live with the evidence, so I removed it, and now everyone who saw it knows I cared, which is the one thing the thirst trap was supposed to hide. The deeper fail signal is that your calibration of your own appeal is off, which means the next post will be adjusted to compensate, and over-adjusted posts perform worse, which creates a spiral that ends in either a hiatus or a rebrand. The aura recovery is counterintuitive. Do not post again for a week. Do not explain the delete. Do not post a self-deprecating follow-up. The internet forgets posts faster than it forgets explanations, and silence is the only aura-preserving response to a thirst trap that did not land. The lesson is that the audience is always right, and arguing with the audience is the most expensive argument available, and the delete button is not a refund.",
  },
  {
    id: "creating-meme-format-others-use",
    title: "Creating a Meme Format Others Actually Use",
    points: 50000,
    category: "internet",
    tier: "god",
    description: "You made a meme template and strangers started filling in their own captions.",
    analysis:
      "Creating a meme format that others adopt is the internet aura event with the longest tail, because the format outlives the original post by years. Fifty thousand points because you did not just make a joke - you made a structure, and structures are reusable, which means your contribution keeps generating value long after you logged off. The aura is in the virality of the format rather than the virality of the instance. A viral post is a hit song. A viral format is a genre, and genres are worth more than songs because they spawn a thousand songs that all trace back to you. The deeper internet signal is that format creation requires a different kind of humor than joke-telling. You have to identify a pattern that is specific enough to be recognizable and empty enough to be filled, which is a design skill disguised as a comedy skill. The aura compounds because formats get attributed retroactively. Six months from now, someone will make a Know Your Meme entry, and your handle will be in the origin field, and that entry will outlive every other post you ever make.",
  },
  {
    id: "going-viral-good-reason",
    title: "Going Viral for a Good Reason",
    points: 40000,
    category: "internet",
    tier: "god",
    description: "A post of yours spread widely and the response was mostly positive.",
    analysis:
      "Going viral for a good reason is the internet aura event everyone wants and few survive, because virality is a magnifying glass that enlarges the good and the bad simultaneously. Forty thousand points because the post traveled past your followers into the general feed, which means strangers made a judgment about you in under three seconds, and the majority decided you were worth amplifying. The aura is in the asymmetry. Most viral posts are cringe, controversy, or accident. Yours was genuine, which means the audience endorsed the content rather than the spectacle, which is a rarer and more durable form of attention. The deeper internet signal is that good virality tends to be specific. It was a take, a photo, a thread - not a broad personality showcase. The specificity is what made it travel, because specific content finds the audience that cares, and the audience that cares is the audience that shares. The lesson is to not chase the second viral post. The first one was an accident of timing and quality. The second attempt will be an attempt, and the internet can tell, and it punishes attempts.",
  },
  {
    id: "getting-ratioed",
    title: "Getting Ratioed on a Public Post",
    points: -8000,
    category: "internet",
    tier: "major",
    description: "A reply to your post got dramatically more engagement than your post.",
    analysis:
      "Getting ratioed is the internet fail where the audience votes against you using the only ballot available: the like button on someone else reply. Eight thousand points lost because the ratio is a public scoreboard that updates in real time, and the scoreboard says your take was worse than the response to your take, which is a humiliation that compounds every time someone checks the thread. The aura loss is in the visibility. The ratio is not hidden. It is the first thing people see when they open the post, and the first thing they see is that a stranger dismantled you with a single reply that the audience preferred. The deeper fail signal is that your take was either wrong, unkind, or unoriginal, and the audience selected the most efficient of those three as the reason to amplify the reply. The recovery is limited. You can delete the post, which confirms the loss. You can double down, which extends it. The only move that preserves aura is to leave the post up, learn the lesson, and never post a similar take again, because the algorithm remembers the ratio.",
  },
  {
    id: "tweet-liked-by-celebrity",
    title: "A Celebrity Liked Your Tweet",
    points: 12000,
    category: "internet",
    tier: "major",
    description: "A verified account you admire liked your post within minutes.",
    analysis:
      "A celebrity like is an internet aura event where the value is in the source. Twelve thousand points because the like is a signal that someone whose attention is scarce chose to spend a fraction of it on your post, which means your content passed a filter that most content does not. The aura is in the asymmetry. The celebrity sees thousands of notifications. They liked yours, which means your tweet stood out in a feed designed to bury it, and the standing-out is the achievement. The deeper internet signal is that the like is a micro-endorsement that the algorithm interprets as a quality signal, which means the like will push your post to more feeds, which means the celebrity single tap has a multiplier effect on your reach that lasts for the lifecycle of the post. The aura lesson is that celebrity attention is a form of currency, and the currency is most valuable when spent quietly, because a public acknowledgment from a celebrity invites scrutiny that a private like does not, and scrutiny is the enemy of aura preservation.",
  },
  {
    id: "posting-selfie-to-work-slack",
    title: "Accidentally Posting a Selfie to Work Slack",
    points: -15000,
    category: "internet",
    tier: "catastrophic",
    description: "You sent a personal photo to the company channel instead of a friend.",
    analysis:
      "Posting a selfie to the work Slack is the internet fail where the damage is professional and the cause is a UI that puts your boss and your best friend two taps apart. Fifteen thousand points lost because the photo was not meant for this audience, and now colleagues you have carefully curated a professional image for have seen you in a context you did not choose, and the context cannot be unchosen. The aura loss is in the recontextualization. The same photo that would have been fine in a group chat is catastrophic in a work channel, because the audience determines the meaning, and the work audience reads a selfie as a lapse in judgment. The deeper fail signal is that your app switching is careless, which is a digital hygiene problem that will repeat until you reorganize your notifications, your workspaces, and your muscle memory. The recovery is a single message that is brief, self-aware, and devoid of explanation. The longer you explain, the more aura you spend. The lesson is that the distance between professional and personal is one wrong tap.",
  },
  {
    id: "going-viral-embarrassing-reason",
    title: "Going Viral for an Embarrassing Reason",
    points: -35000,
    category: "internet",
    tier: "catastrophic",
    description: "A post of yours spread and the attention was mocking rather than admiring.",
    analysis:
      "Going viral for an embarrassing reason is the internet fail that inverts the usual virality math: the reach is the punishment. Thirty-five thousand points lost because the same algorithm that rewards good content also distributes bad content, and the audience that would have ignored a mild post will enthusiastically amplify a cringe one, because cringe is more shareable than quality. The aura loss is in the permanence. The post is now indexed. Your name is attached. The clip will resurface in search results for your handle for years, and every resurfacing is a fresh wave of strangers forming a first impression based on your worst moment. The deeper fail signal is that you posted without the second-guess that would have caught the issue, which means your internal editor is underpowered relative to your reach. The recovery is to lock the account, to let the cycle exhaust, and to never post the apology that the audience is baiting, because the apology is content too, and content is what got you here. The lesson is that virality is neutral and the audience is not, and the combination is a lottery where the jackpot and the tax are the same number.",
  },
  {
    id: "getting-verified",
    title: "Getting Verified on a Major Platform",
    points: 30000,
    category: "internet",
    tier: "god",
    description: "Your account received the verification badge.",
    analysis:
      "Verification is the internet aura event where the platform itself certifies your identity, which is a form of institutional endorsement that no follower count can replicate. Thirty thousand points because the badge is a signal to every future interaction that you are who you say you are, that your account is the canonical one, and that impersonators are the copies. The aura is in the gatekeeping. Verification is not awarded for content quality. It is awarded for notability, which is a different and harder bar, because notability requires that people outside your existing audience have reason to look for you. The deeper internet signal is that verification changes how strangers interact with your posts. A verified reply in a thread carries more weight than an unverified one, which means the badge multiplies the reach of every individual post without changing the content. The aura lesson is that the badge is a tool, not a trophy, and the accounts that use it as a tool - to verify, to amplify, to credentialize - preserve the aura, while the accounts that treat it as a finish line tend to stop posting well.",
  },
  {
    id: "old-cringe-tweet-resurfaces",
    title: "An Old Cringe Tweet Resurfaces",
    points: -20000,
    category: "internet",
    tier: "catastrophic",
    description: "A tweet from years ago started getting attention and it does not age well.",
    analysis:
      "A resurfaced old tweet is the internet fail where the damage is archival, which is a unique kind of cruelty. Twenty thousand points lost because the tweet was written in a different context, in a different version of you, and the audience is judging it with today standards, which is a trial with no statute of limitations. The aura loss is in the time travel. The tweet arrives in the present as if you just said it, and you cannot explain that the context was different because the audience does not care about context, they care about the text, and the text is on your profile. The deeper fail signal is that you have not purged your archive, which is a hygiene practice that everyone in the public eye eventually adopts, usually after the first resurface. The recovery is to lock down the archive, delete the worst offenders, and accept that the resurfaced tweet is now part of your permanent record, which is the cost of having been online long enough to have a permanent record. The lesson is that the internet is a museum that never rotates its exhibits.",
  },
  {
    id: "video-goes-viral-followers",
    title: "A Video You Posted Brought Real Followers",
    points: 28000,
    category: "internet",
    tier: "god",
    description: "Your video hit and the followers that came with it actually stayed.",
    analysis:
      "A viral video that brings retained followers is the rarest internet aura event, because most viral attention is transient and most viral followers are tourists. Twenty-eight thousand points because your video did not just get views - it converted views into subscribers, which is the only conversion that matters for long-term aura. The aura is in the retention. A million views that produce zero followers is a firework. A million views that produce fifty thousand followers is a foundation, and foundations are what platforms actually reward, because the algorithm serves content to the people who opted in, not the people who happened to scroll past. The deeper internet signal is that the video worked because it offered something repeatable - a format, a voice, a perspective - that made the viewer want the next one. The lesson is to identify what made the video work before posting the next one, because the worst move after a hit is to post something unrelated, which confuses the new followers and signals to the algorithm that your channel has no consistent identity.",
  },
  {
    id: "accidentally-liking-old-post",
    title: "Accidentally Liking a Post from Years Ago",
    points: -4500,
    category: "internet",
    tier: "moderate",
    description: "You deep-scrolled someone profile and liked a post from 2019.",
    analysis:
      "The accidental like on an old post is the internet fail where the damage is in the notification, which lands on the other person phone with your name attached, announcing that you were deep in their archive. Four thousand five hundred points lost because the like is a confession disguised as a tap, and the confession is that you were scrolling their profile, which is a form of attention that most people prefer to keep private. The aura loss is in the visibility of your interest, which was supposed to be deniable and is now documented. The deeper fail signal is that your scrolling discipline is weak, because the fix is simple - do not like while deep-scrolling - and the fix is ignored because the thumb is faster than the judgment. The recovery is to immediately unlike and to not send a follow-up message, because the follow-up confirms the scroll, while the unlike leaves the notification ambiguous, and ambiguous notifications cost less than confirmed ones. The lesson is that deep scrolling is a private activity and the like button is a public act.",
  },
  {
    id: "game-winning-shot",
    title: "Hitting the Game-Winning Shot",
    points: 20000,
    category: "sports",
    tier: "god",
    description: "You took the final shot and it went in as the buzzer sounded.",
    analysis:
      "The game-winning shot is the sports aura event with the highest concentration of pressure per second. Twenty thousand points because the shot is not just about the make - it is about the willingness to take it, which is a decision that most players avoid, because the cost of missing is higher than the cost of deferring. You did not defer. You called for the ball, or you received it and did not pass, and you shot, and the ball left your hand with the entire game on the line, and the ball fell, and the gym erupted. The aura is in the courage. Everyone remembers the shooter. No one remembers the defender who gave up the look. The deeper sports signal is that game-winners are not luck. They are the product of thousands of reps that built a release stable enough to survive the adrenaline of the moment, and the reps are invisible to everyone except the shooter. The aura compounds because game-winners become permanent stories, retold at reunions, and each retelling adds a layer of mythology that makes the shot sound more inevitable than it was.",
  },
  {
    id: "hitting-home-run",
    title: "Hitting a Home Run in a Real Game",
    points: 12000,
    category: "sports",
    tier: "major",
    description: "You made solid contact and the ball left the park.",
    analysis:
      "A home run is the sports aura event where the sound tells the story. Twelve thousand points because the contact is unmistakable - the crack of the bat is different when the ball is squared, and everyone on the field knows before they look up, which is a moment of collective recognition that you just did something. The aura is in the trot. You hit the ball, you watched it, you knew, and then you ran the bases at a pace that said you expected it, even if you did not, because the trot is part of the aura. A sprint says surprise. A trot says this is what I do. The deeper sports signal is that home runs are the product of a swing that has been refined through repetition to a point where the timing is intuitive rather than calculated, and the intuition is what allows the swing to survive the speed of the pitch. The aura lesson is that power without timing is useless, and timing without power is a single, and the home run is the rare moment where both align.",
  },
  {
    id: "bowling-300",
    title: "Bowling a Perfect 300 Game",
    points: 35000,
    category: "sports",
    tier: "god",
    description: "You bowled twelve strikes in a row for a perfect game.",
    analysis:
      "A 300 game is the sports aura event with the highest internal pressure, because the pressure builds with every strike rather than easing. Thirty-five thousand points because the first strike is relief, the sixth strike is attention, the tenth strike is a crowd, and the twelfth strike is the entire alley watching a single person throw a single ball with twelve thousand frames of perfect on the line. The aura is in the composure. The hardest shot in bowling is the last one, because the last one is the only one that matters, and you have to throw it with the same arm that threw the first eleven, which means the body has to forget the stakes to execute the mechanics, and forgetting the stakes is a skill that very few people have under that specific pressure. The deeper sports signal is that a 300 is not a peak performance - it is a performance without a miss, which is a different and rarer thing, because peak implies one great moment, and a 300 implies twelve consecutive great moments.",
  },
  {
    id: "hole-in-one",
    title: "Sinking a Hole-in-One",
    points: 40000,
    category: "sports",
    tier: "god",
    description: "Your tee shot went in the hole in a single stroke.",
    analysis:
      "A hole-in-one is the sports aura event that is most dependent on luck, which is part of why it carries so much aura. Forty thousand points because the shot requires skill - you have to hit the ball the right distance with the right trajectory - but the entry into the cup requires a bounce, a roll, and a cooperation from the green that no amount of practice can guarantee. The aura is in the rarity. Most golfers play for decades and never get one. You got one, which means you were at the intersection of skill and chance that the sport has been waiting to offer you, and you were there on the correct day. The deeper sports signal is that a hole-in-one is the one achievement in golf that cannot be chased, only received, and the receiving is what makes it precious. The aura lesson is that the hole-in-one is a story you will tell for the rest of your life, and the story will get better with each retelling, because the ball that went in is the same ball that will sit on your desk forever.",
  },
  {
    id: "missing-easy-layup",
    title: "Missing a Wide-Open Layup",
    points: -4000,
    category: "sports",
    tier: "moderate",
    description: "You missed a layup that had no defender and no excuse.",
    analysis:
      "Missing a wide-open layup is the sports fail where the damage is not in the score but in the visibility of the error. Four thousand points lost because everyone saw the open lane, everyone saw the ball leave your hand, and everyone saw the ball hit the rim and bounce out, which is a sequence that reads as incompetence rather than misfortune. The aura loss is in the ease. A missed three is forgivable, because threes are hard. A missed layup is not, because layups are the one shot that everyone assumes they would make, which means the audience is judging you against a hypothetical version of themselves that has never missed one. The deeper fail signal is that you looked at the rim rather than at the square, or you rushed, or you thought about the next play before finishing this one, and the lapse in focus is what cost the points. The recovery is to make the next one, because the only cure for a missed layup is a made layup, and the made one has to come quickly.",
  },
  {
    id: "tripping-during-marathon",
    title: "Tripping During a Marathon",
    points: -6000,
    category: "sports",
    tier: "major",
    description: "You fell mid-race and had to get up and keep going.",
    analysis:
      "Tripping during a marathon is a sports fail where the aura damage is proportional to the crowd size at the point of the fall. Six thousand points lost because the fall happened in front of spectators, which means dozens of people watched you go from running to prone in a single stride, and the collective gasp is a sound that drains aura faster than any other stadium noise. The aura loss is in the recovery, not the fall. Falling is fine. Getting up slowly is not. The marathon does not pause for falls, which means the seconds you spent on the ground are seconds the field took from you, and the time is gone. The deeper fail signal is that your form broke down, which means you were fatigued, which means you mismanaged your pace, and the fall is the receipt for the mismanagement. The recovery is to get up immediately, to not limp even if it hurts, and to finish the race, because a marathon finished after a fall is a more impressive story than a marathon finished clean.",
  },
  {
    id: "getting-injured-mid-season",
    title: "Getting Injured Mid-Season",
    points: -15000,
    category: "sports",
    tier: "catastrophic",
    description: "You sustained an injury that took you out for the rest of the season.",
    analysis:
      "A mid-season injury is a sports fail where the aura loss is compounded by time, because the injury does not just cost one game - it costs the season, the conditioning, and the momentum that was building toward a peak. Fifteen thousand points lost because the injury is not just physical. It is narrative. You were on a trajectory, and the trajectory is interrupted, and the team has to continue without you, which means the team learns to play without you, which means your return is not guaranteed to restore your role. The aura loss is in the observation. You watch from the bench, you watch from the MRI table, you watch from the physical therapy appointment, and watching is the most aura-destructive activity in sports, because sports is about doing, and the injured athlete is the one person who cannot. The recovery is slow and nonlinear. The body heals at its own pace, the pace does not respect the schedule, and the return requires proving that the injury is gone.",
  },
  {
    id: "championship-win",
    title: "Winning the Championship Game",
    points: 60000,
    category: "sports",
    tier: "god",
    description: "Your team won the final game and you were on the roster.",
    analysis:
      "A championship win is the god-tier sports aura event because it is the convergence of an entire season into a single result. Sixty thousand points because the win is not a moment - it is the payoff of months of practice, travel, injuries, recoveries, losses, and adjustments, all compressed into a final score that will be engraved on a trophy that outlives everyone who played for it. The aura is in the permanence. Stats fade. Records break. Trophies do not. The trophy sits in a case and says, on a specific day, in a specific year, this team was the best, and you were on the team, and that fact is now eternal. The deeper sports signal is that championship aura compounds across a lifetime. The win goes on the resume. The ring goes on the finger. The story goes into every introduction for the next fifty years, and the introduction always leads with the championship, because the championship is the one credential that requires no explanation.",
  },
  {
    id: "getting-cut-from-team",
    title: "Getting Cut from the Team",
    points: -22000,
    category: "sports",
    tier: "catastrophic",
    description: "You did not make the final roster after tryouts.",
    analysis:
      "Getting cut is a sports fail where the damage is dual: you lost the team, and you lost the identity that came with the team. Twenty-two thousand points lost because being on the team was not just an activity - it was a self-description, and the cut removed both the activity and the description in a single conversation with a coach who probably did not enjoy delivering the news. The aura loss is in the reclassification. You were an athlete. Now you are a former athlete, which is a liminal identity that takes months to resolve, and the resolution depends on whether you find a new arena or a new identity. The deeper fail signal is that the cut is a data point about your current level, which is information that the coach has and you now have, and the information is the most honest feedback you will receive in sports, because cuts do not flatter. The recovery is to train in private, to come back to the next tryout visibly better, and to let the improvement speak.",
  },
  {
    id: "olympic-podium",
    title: "Standing on an Olympic Podium",
    points: 100000,
    category: "sports",
    tier: "god",
    description: "You won a medal and stood on the podium at an international level.",
    analysis:
      "An Olympic podium is the absolute ceiling of sports aura, because it is the one achievement that transcends the sport and becomes a national story. One hundred thousand points because the podium is the payoff of a life organized around a single discipline since childhood, which is a sacrifice that almost no one is willing to make and almost no one is capable of making. The aura is in the rarity. Millions play the sport. Hundreds reach the Games. Three stand on the podium. You were one of the three, which means you are in a statistical extreme that the medal around your neck will certify for the rest of your life. The deeper sports signal is that podium aura is permanent and portable. It follows you out of the sport, into commentary, into business, into any room you enter, because the medal is the most universally recognized credential in sports, and people who do not follow your specific event still understand what the podium means. The aura lesson is that the podium was not the goal. The podium was the receipt for the work, and the work was the real achievement.",
  },
  {
    id: "walking-into-party-everyone-knows-you",
    title: "Walking Into a Party and Everyone Knows Your Name",
    points: 25000,
    category: "social",
    tier: "god",
    description: "You entered the room and multiple people greeted you immediately.",
    analysis:
      "Walking into a party where your name is known is the social aura event that most directly measures your social capital, because the party is a sample of your network and the network just responded. Twenty-five thousand points because the greetings are not performative - they are reflexive, which means you have been on these people minds enough that your arrival triggered recognition, which is the raw material of social influence. The aura is in the momentum. You did not have to introduce yourself. You did not have to find the host. You walked in, and the room adjusted, which is a position that most people spend years trying to reach and few ever do. The deeper social signal is that the greetings compound. Each person who greets you makes the next person more likely to, because social proof is contagious and the room reads the early greeters as endorsements, which cascades into a wave that carries you through the door and into the center without effort. The lesson is to reciprocate, because the aura of being known is maintained by knowing others.",
  },
  {
    id: "being-forgotten-at-restaurant",
    title: "Being Forgotten at a Restaurant Table",
    points: -3000,
    category: "social",
    tier: "moderate",
    description: "The server skipped your table and you sat without water for twenty minutes.",
    analysis:
      "Being forgotten at a restaurant is a social fail where the damage is mostly internal, because no one else at the table noticed, which means the aura loss is between you and the server and your own self-worth. Three thousand points lost because the forgetting reads as invisibility, which is the social experience that most people fear and few will admit to, and the restaurant just handed you a free sample of it. The aura loss is in the interpretation. The server probably forgot because they are busy, not because you are forgettable, but the interpretation is hard to override in the moment, because the moment is one where your presence failed to register, and presence is the foundation of social aura. The deeper fail signal is that you did not flag the server, which means your discomfort tolerance is too high, which is a trait that costs aura in every setting where assertiveness is the only way to be seen. The recovery is to wave the server down, to order confidently, and to tip based on the recovery rather than the lapse.",
  },
  {
    id: "best-man-speech-kills-it",
    title: "Giving a Best Man Speech That Kills",
    points: 18000,
    category: "social",
    tier: "god",
    description: "Your wedding speech made the room laugh and cry in the right order.",
    analysis:
      "A best man speech that lands is the social aura event with the highest captive-audience multiplier, because the room is full of people who know the groom, know the family, and are emotionally primed to laugh and cry, and you are the one holding the microphone. Eighteen thousand points because the speech is not just comedy - it is a structure that has to move from humor to sincerity to a toast, and the transitions are where most speeches fail and yours did not. The aura is in the control. You held a room of a hundred people for five minutes, which is a skill that most people never develop and that transfers to every future presentation, eulogy, and difficult conversation. The deeper social signal is that the speech becomes a permanent artifact. The video is on the wedding website. The transcript is in the album. The quotes will be repeated at anniversaries for decades, and each repetition is a small aura deposit that you did nothing to earn after the original five minutes.",
  },
  {
    id: "getting-plus-one-to-wedding",
    title: "Getting a Plus-One to a Wedding",
    points: 8000,
    category: "social",
    tier: "major",
    description: "You were invited to a wedding with a plus-one, which means they value your company.",
    analysis:
      "A wedding plus-one is a social aura event that measures something specific: the couple trusts you to bring someone who will not ruin the seating chart. Eight thousand points because the plus-one is not given to everyone - it is given to the guests whose taste in company the couple respects, which is a quieter and more meaningful endorsement than the invitation itself. The aura is in the trust. The couple is paying for a plate, and they are paying for a plate for your guest, which means they believe the guest you bring will be worth the cost, and that belief is a reflection on you, because you are the one who chose the guest. The deeper social signal is that the plus-one is a status signal within the guest list, because the guests without one notice the guests with one, and the asymmetry maps to a hierarchy of closeness that the wedding seating chart makes visible. The lesson is to bring someone who makes you look good, because the plus-one is an extension of your aura.",
  },
  {
    id: "being-the-funny-friend",
    title: "Being Known as the Funny One in the Group",
    points: 14000,
    category: "social",
    tier: "major",
    description: "Your friends expect you to carry the humor, and you consistently deliver.",
    analysis:
      "Being the funny friend is a social aura position that is rewarding and exhausting in equal measure, because the position requires you to perform on cue, and the cue is every silence in every group hang. Fourteen thousand points because the role is earned through a track record of jokes that landed, references that stuck, and timing that the group now relies on, which is a dependency that flatters and traps simultaneously. The aura is in the expectation. When the group goes quiet, they look at you, which is a form of social power, because the person who breaks the silence sets the tone, and tone-setting is leadership wearing a joke. The deeper social signal is that the funny friend role is the most transferable social skill in the toolkit, because humor is the one currency that spends in every room - job interviews, first dates, grief, joy - and the person who can find the right joke at the right time is the person who is invited back. The lesson is to occasionally let someone else be funny, because the role becomes a cage when it is permanent.",
  },
  {
    id: "forgetting-name-mid-conversation",
    title: "Forgetting Someone Name Mid-Conversation",
    points: -2500,
    category: "social",
    tier: "moderate",
    description: "You were talking to someone and realized you never retained their name.",
    analysis:
      "Forgetting a name mid-conversation is a social fail where the damage is in the cover-up, not the lapse. Two thousand five hundred points lost because the name was probably said once, at the start, and you did not encode it, which is a failure of attention rather than memory, and now you are three minutes into a conversation that has become a puzzle about how to extract the name without admitting you lost it. The aura loss is in the energy you spend on the extraction. You stop listening to them because you are listening for someone else to say their name, which means the conversation degrades on both ends, and the degradation is your fault. The deeper fail signal is that you treated the introduction as a formality rather than information, which is a habit that costs aura in every new encounter. The recovery is the honest reset: just ask. Say you are terrible with names, ask again, and repeat it back. The honesty is cheaper than the cover-up.",
  },
  {
    id: "left-out-of-group-chat",
    title: "Being Left Out of a Group Chat",
    points: -7000,
    category: "social",
    tier: "major",
    description: "You discovered a group chat exists that you were not added to.",
    analysis:
      "Being left out of a group chat is a social fail where the damage is informational before it is emotional, because the exclusion means you are missing context that the rest of the group has, which compounds with every message you do not see. Seven thousand points lost because the exclusion is a reclassification - you were in the inner circle, and now you are in the outer circle, and the reclassification happened without a conversation, which is the cruelest way to be demoted. The aura loss is in the discovery. You found out because someone referenced the chat in your presence, which means the chat was not secret enough to stay secret, which means the group either wanted you to know or did not care enough to hide it, and both interpretations sting. The deeper fail signal is that your standing shifted and no one told you, which means your social awareness is lagging the social reality. The recovery is to not mention it, to not ask to be added, and to invest in the one-on-ones that the group chat was replacing.",
  },
  {
    id: "hosting-party-everyone-shows-up",
    title: "Hosting a Party and Everyone Shows Up",
    points: 20000,
    category: "social",
    tier: "god",
    description: "You threw a party and every single person you invited attended.",
    analysis:
      "Hosting a party where everyone shows is a social aura event that measures your pull, because attendance is the one metric that cannot be faked and the one RSVP that cannot be soft. Twenty thousand points because full attendance means every invitee decided your party was worth their evening, which is a decision each of them made independently, and the independent decisions all resolved in your favor, which is a majority that no election can replicate. The aura is in the proof. Partial attendance is ambiguous - maybe they were busy, maybe they did not want to come. Full attendance is unambiguous: they wanted to be at your party more than they wanted to be anywhere else, and the wanting is the aura. The deeper social signal is that the party you throw is a public artifact of your taste - the music, the food, the lighting, the guest list - and the attendees are endorsing the taste by showing up, which is a credential that compounds at the next invite.",
  },
  {
    id: "ghosted-by-friend-group",
    title: "Being Ghosted by a Friend Group",
    points: -18000,
    category: "social",
    tier: "catastrophic",
    description: "The group stopped responding to you and you do not know why.",
    analysis:
      "Being ghosted by a friend group is a social fail where the damage is the silence, because silence is the one form of feedback that cannot be addressed, refuted, or learned from. Eighteen thousand points lost because the ghosting is ambiguous, and ambiguity is worse than conflict. If they told you what you did, you could fix it. They did not tell you, which means the issue is either something you are expected to know or something they do not want to name, and both options leave you without the information needed to repair. The aura loss is in the spiral. You will replay the last few interactions looking for the moment, and the replaying will degrade your confidence in every other friendship, because the ghosting teaches you that relationships can end without warning, which is a lesson that costs aura in every future hangout. The recovery is to not chase. Send one message, wait, and if no response comes, let the silence be the answer. The aura returns through new people, because the new people do not know the old group.",
  },
  {
    id: "reconnecting-with-old-friend",
    title: "Reconnecting With an Old Friend",
    points: 9000,
    category: "social",
    tier: "major",
    description: "You reached out to someone you had not spoken to in years and it landed.",
    analysis:
      "Reconnecting with an old friend is a social aura event that pays out over years rather than moments, because the reconnection restores a relationship that had already proven itself and removes the startup cost of building a new one. Nine thousand points because the reach-out is the hard part. You had to send the message, which is an act of vulnerability, because the message could have been ignored, and the ignoring would have cost aura. It was not ignored. The friend responded, which means the relationship had a foundation that survived the gap, and foundations that survive gaps are the ones worth rebuilding on. The aura is in the relief. You were both thinking about reaching out, and neither of you did, and then one of you did, and the doing broke the stalemate that silence had created. The deeper social signal is that old friendships are the most aura-efficient relationships available, because the trust is pre-built, the context is shared, and the catch-up conversation is richer than any new-friend conversation.",
  },
  {
    id: "streak-snapped-accidentally",
    title: "Losing a Long Snap Streak Accidentally",
    points: -3500,
    category: "social",
    tier: "moderate",
    description: "You forgot to maintain a months-long streak and it vanished.",
    analysis:
      "Losing a long snap streak is a social fail where the damage is in the sunk cost, because the streak was months of daily maintenance and the maintenance is now worthless. Three thousand five hundred points lost because the streak was a proxy for the relationship, and the loss of the streak is a visible disruption of the proxy, which forces a conversation about whether the underlying relationship is also disrupted. The aura loss is in the symbolism. A streak is a small thing. The loss of a streak is a large thing, because the streak was proof of daily attention, and attention is the currency of every relationship, and the loss suggests the attention has lapsed, even if the lapse was accidental. The deeper fail signal is that your habits have a single point of failure - you relied on remembering rather than on a reminder - and the failure cost the streak. The recovery is to start a new streak immediately, because the new streak is the only replacement for the old one.",
  },
  {
    id: "accidental-speakerphone-reveal",
    title: "Being on Speakerphone Without Knowing",
    points: -6000,
    category: "social",
    tier: "major",
    description: "You were talking about someone and they were in the room on the other end.",
    analysis:
      "The accidental speakerphone reveal is a social fail where the damage is total, because the thing you said reached the person you said it about, in real time, with no opportunity for editing. Six thousand points lost because the speakerphone converted a private complaint into a public confrontation, and the conversion was your fault, because you did not confirm who was in the room before speaking freely. The aura loss is in the exposure of your private commentary, which is now public record, at least to the one person who needed to hear it least. The deeper fail signal is that your assumption about the call privacy was wrong, and assumptions about privacy are the most expensive assumptions in social life, because the cost of being wrong is borne by the relationship rather than the technology. The recovery is the immediate apology, offered without explanation, because explanations extend the exposure and the exposure is what costs the aura. The lesson is that every call is potentially a conference call until confirmed otherwise.",
  },
];
