let state;

//Intro

let dialogue = [
  `title lol`,

  `It’s the beginning of the year. You wake up and start on your daily 
  100 push ups, 100 sit-ups, 100 squats, and a 10 kilometer run.`, //1

  `After your daily routine, you go and eat your post-workout breakfast 
  consisting of 3 protein shakes, 6 eggs, and 3 protein bars.`, //2

  `After that, you go to school.`, //3

  `On the way to school… `, //4

  `I wish I could work out more before school but I guess this will 
  do for now…`, //5

  `Hey hey Marky! Miss me? I haven’t seen you all summer!`, //6

  `It is better that way.`, //7

  `Oh don’t be so cold!`, //8

  `*sniffs* Hmm… did you not shower before going out?`, //9

  `No, why?`, //10

  `Hee hee. I love the smell of your sweat. So delectable, 
  so masculine… It's worth killing for.`, //11

  `Can I lick your sweat?`, //12

  ``, //13
];

let names = [
  "title lol",
  //intro

  "Narrator", //1
  "Narrator", //2
  "Narrator", //3
  "Narrator", //4
  "Mark", //5
  "Avery", //6
  "Mark", //7
  "Avery", //8
  "Avery", //9
  "Mark", //10
  "Avery", //11
  "Avery", //12
  "Mark", //13
];

let index;

//choices 0

let dialogue0_1 = [
  `“Ayo what’s wrong with you, man!”`, //0
  `Don’t be like that! I want to buy your bathwater next… What’s 
the price?`, //1
  `Ugh…`, //2
  `Thank god. We are finally here.`, //3
  `Yippee! We’re here!`, //4
  `Hmm… I wonder who our teach is. Do you know Marky?`, //5
  `Do you not read? You’ll find out later anyways. Let’s just go 
to class.`, //6
  `In class...`, //7
  `*Bell rings*`, //8
  `Seems like I came not a moment too soon. Greetings young ones. 
I am your math teacher, Mrs. Milkerton. I hope all of you are 
all excited.`, //9
  `Especially you, handsome.`, //10
  `(Uhh… Why is she looking at me like that?)`, //11
  ``, //12
];

let dialogue0_2 = [
  `“Can you not?”`, //0
  `Don’t be like that! I want to buy your bathwater next… What’s 
the price?`, //1
  `Ugh…`, //2
  `Thank god. We are finally here.`, //3
  `Yippee! We’re here!`, //4
  `Hmm… I wonder who our teach is. Do you know Marky?`, //5
  `Do you not read? You’ll find out later anyways. Let’s just go 
to class.`, //6
  `In class...`, //7
  `*Bell rings*`, //8
  `Seems like I came not a moment too soon. Greetings young ones. 
I am your math teacher, Mrs. Milkerton. I hope all of you are 
all excited.`, //9
  `Especially you, handsome.`, //10
  `(Uhh… Why is she looking at me like that?)`, //11
  ``, //12
];

let dialogue0_3 = [
  `“Huh?!”`, //0
  `Don’t be like that! I want to buy your bathwater next… What’s 
the price?`, //1
  `Ugh…`, //2
  `Thank god. We are finally here.`, //3
  `Yippee! We’re here!`, //4
  `Hmm… I wonder who our teach is. Do you know Marky?`, //5
  `Do you not read? You’ll find out later anyways. Let’s just go 
to class.`, //6
  `In class...`, //7
  `*Bell rings*`, //8
  `Seems like I came not a moment too soon. Greetings young ones. 
I am your math teacher, Mrs. Milkerton. I hope all of you are 
all excited.`, //9
  `Especially you, handsome.`, //10
  `(Uhh… Why is she looking at me like that?)`, //11
  ``, //12
];

let names0 = [
  "Mark", //0
  "Avery", //1
  "Mark", //2
  "Mark", //3
  "Avery", //4
  "Avery", //5
  "Mark", //6
  "Narrator", //7
  "Narrator", //8
  "Mrs. Milkerton", //9
  "Mrs. Milkerton", //10
  "Mark", //11
  "Mark", //12
];

let index0 = 0;

//Choices 1

let dialogue1_1 = [
  `I… I am excited to learn, ma’am!`, //0
  `I am glad to hear such enthusiasm. I hope all of you, dear 
students, follow his example.`, //1
  `So today, class, we’ll be doing a pop quiz!`, //2
  `Seriously?`, //3
  `We just got here!`, //4
  `Math pop quiz? I’ll ace this easily!`, //5
  `Of course you are excited about this…`, //6
  `Now now, students. I am not grading this quiz per se… I am 
  just using this quiz as a way to get an idea on where all of 
  you are. It’s okay if you don’t get the answers right.`, //7
  `As your teacher, it is my job to make sure each and every one 
  of you are on the same level. I’ll pass the papers out. Do 
  your best!`, //8
  `*The papers were passed out*`, //9
  `(Shit… What are all of these symbols? Solve for x? What does 
that even mean!)`, //10
  `(Of course Avery knows the answers. He solves these kinds of 
questions in his sleep.)`, //11
  `Hmm hmm! I love math! I love math!`, //12
  `Hey handsome. No cheating now!`, //13
  ``, //14
];

let dialogue1_2 = [
  `*Ignore her*`, //0
  `It’s okay, you’ll understand later~`, //1
  `So today, class, we’ll be doing a pop quiz!`, //2
  `Seriously?`, //3
  `We just got here!`, //4
  `Math pop quiz? I’ll ace this easily!`, //5
  `Of course you are excited about this…`, //6
  `Now now, students. I am not grading this quiz per se… I am 
  just using this quiz as a way to get an idea on where all of 
  you are. It’s okay if you don’t get the answers right.`, //7
  `As your teacher, it is my job to make sure each and every one 
  of you are on the same level. I’ll pass the papers out. Do 
  your best!`, //8
  `*The papers were passed out*`, //9
  `(Shit… What are all of these symbols? Solve for x? What does 
that even mean!)`, //10
  `(Of course Avery knows the answers. He solves these kinds of 
questions in his sleep.)`, //11
  `Hmm hmm! I love math! I love math!`, //12
  `Hey handsome. No cheating now!`, //13
  ``, //14
];

let dialogue1_3 = [
  `Huh?`, //0
  `It’s okay, you’ll understand later~`, //1
  `So today, class, we’ll be doing a pop quiz!`, //2
  `Seriously?`, //3
  `We just got here!`, //4
  `Math pop quiz? I’ll ace this easily!`, //5
  `Of course you are excited about this…`, //6
  `Now now, students. I am not grading this quiz per se… I am 
  just using this quiz as a way to get an idea on where all of 
  you are. It’s okay if you don’t get the answers right.`, //7
  `As your teacher, it is my job to make sure each and every one 
  of you are on the same level. I’ll pass the papers out. Do 
  your best!`, //8
  `*The papers were passed out*`, //9
  `(Shit… What are all of these symbols? Solve for x? What does 
that even mean!)`, //10
  `(Of course Avery knows the answers. He solves these kinds of 
questions in his sleep.)`, //11
  `Hmm hmm! I love math! I love math!`, //12
  `Hey handsome. No cheating now!`, //13
  ``, //14
];

let names1 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mrs. Milkerton", //2
  "Student 1", //3
  "Student 2", //4
  "Avery", //5
  "Mark", //6
  "Mrs. Milkerton", //7
  "Mrs. Milkerton", //8
  "Narrator", //9
  "Mark", //10
  "Mark", //11
  "Avery", //12
  "Mrs. Milkerton", //13
  "Mark", //14
];

let index1 = 0;

// Choices 2

let dialogue2_1 = [
  `I wasn’t cheating… I was just… checking on my friend…`, //0
  `Still… keep your eyes on your own paper.`, //1
  `*sigh* Alright…`, //2
  `*Soon the quiz was finished*`, //3
  `Okay sweeties! Hand me your quiz papers!`, //4
  `I totally bombed that test… How do you even enjoy this 
subject?`, //5
  `Kumon trained me for this stuff, I did this in 4th grade.`, //6 
  `Hey, I did offer to help you out over the summer but you 
left me on read!`, //7
  `The summer is the time for workouts, not for “solving 
equations”... whatever that means.`, //8
  `Okay, class is dismissed! Mark? May I have a word with you 
after class?`, //9
  `(Uh oh… She’s definitely onto me!)`, //10
  `Uhh… Sure…`, //11
  `See you at lunch!`, //12
  `Avery skipped off.`, //13
  `The rest of the class left the classroom, leaving just 
Mark and Mrs. Milkerton.`, //14
  `Mark, I happened to look at your quiz results. It seems 
like you will have some special help from me this semester.`, //15
  `Is that really necessary?`, //16
  `Of course! I believe your math skills are… less than ideal. 
You did write “I don’t know” on every question.`, //17
  `Fair point… *sigh* Well alright… I guess I’ll just take 
this L.`, //18
  `Okay then let’s begin with the “solve for x” equations. 
Blah blah blah blah blah blah blah blah blah blah blah 
blah blah blah blah blah blah blah blah blah.`, //19
  `(Does this woman ever stop talking?)`, //20
  `Did you get all of that, sweetie? Or perhaps you want to 
take a break… and rest on my lap here?`, //21
  ``, //22
];

let dialogue2_2 = [
  `...`, //0
  `Hey young man, are you listening to me?`, //1
  `...`, //2
  `*Soon the quiz was finished*`, //3
  `Okay sweeties! Hand me your quiz papers!`, //4
  `I totally bombed that test… How do you even enjoy this 
subject?`, //5
  `Kumon trained me for this stuff, I did this in 4th grade.`, //6 
  `Hey, I did offer to help you out over the summer but you 
left me on read!`, //7
  `The summer is the time for workouts, not for “solving 
equations”... whatever that means.`, //8
  `Okay, class is dismissed! Mark? May I have a word with you 
after class?`, //9
  `(Uh oh… She’s definitely onto me!)`, //10
  `Uhh… Sure…`, //11
  `See you at lunch!`, //12
  `Avery skipped off.`, //13
  `The rest of the class left the classroom, leaving just 
Mark and Mrs. Milkerton.`, //14
  `Mark, I happened to look at your quiz results. It seems 
like you will have some special help from me this semester.`, //15
  `Is that really necessary?`, //16
  `Of course! I believe your math skills are… less than ideal. 
You did write “I don’t know” on every question.`, //17
  `Fair point… *sigh* Well alright… I guess I’ll just take 
this L.`, //18
  `Okay then let’s begin with the “solve for x” equations. 
Blah blah blah blah blah blah blah blah blah blah blah 
blah blah blah blah blah blah blah blah blah.`, //19
  `(Does this woman ever stop talking?)`, //20
  `Did you get all of that, sweetie? Or perhaps you want to 
take a break… and rest on my lap here?`, //21
  ``, //22
];

let names2_1 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mark", //2
  "Narrator", //3
  "Mrs. Milkerton", //4
  "Mark", //5
  "Avery", //6
  "Avery", //7
  "Mark", //8
  "Mrs. Milkerton", //9
  "Mark", //10
  "Mark", //11
  "Avery", //12
  "Narrator", //13
  "Narrator", //14
  "Mrs. Milkerton", //15
  "Mark", //16
  "Mrs. Milkerton", //17
  "Mark", //18
  "Mrs. Milkerton", //19
  "Mark", //20
  "Mrs. Milkerton", //21
  "Mark", //22
];

let dialogue2_3 = [
  `Huh?`, //0
  `Don’t play dumb, I know you were looking over at your 
friend’s paper.`, //1
  `Uhh… no I wasn’t.`, //2
  `Still… keep your eyes on your own paper.`, //3
  `*sigh* Alright…`, //4
  `*Soon the quiz was finished*`, //5
  `Okay sweeties! Hand me your quiz papers!`, //6
  `I totally bombed that test… How do you even enjoy this 
subject?`, //7
  `Kumon trained me for this stuff, I did this in 4th grade.`, //8 
`Hey, I did offer to help you out over the summer but you 
left me on read!`, //9
  `The summer is the time for workouts, not for “solving 
equations”... whatever that means.`, //10
  `Okay, class is dismissed! Mark? May I have a word with you 
after class?`, //11
  `(Uh oh… She’s definitely onto me!)`, //12
  `Uhh… Sure…`, //13
  `See you at lunch!`, //14
  `Avery skipped off.`, //15
  `The rest of the class left the classroom, leaving just 
Mark and Mrs. Milkerton.`, //16
  `Mark, I happened to look at your quiz results. It seems 
like you will have some special help from me this semester.`, //17
  `Is that really necessary?`, //18
  `Of course! I believe your math skills are… less than ideal. 
You did write “I don’t know” on every question.`, //19
  `Fair point… *sigh* Well alright… I guess I’ll just take 
this L.`, //20
  `Okay then let’s begin with the “solve for x” equations. 
Blah blah blah blah blah blah blah blah blah blah blah 
blah blah blah blah blah blah blah blah blah.`, //21
  `(Does this woman ever stop talking?)`, //22
  `Did you get all of that, sweetie? Or perhaps you want to 
take a break… and rest on my lap here?`, //23
  ``, //24
];

let names2_2 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mark", //2
  "Mrs. Milkerton", //3
  "Mark", //4
  "Narrator", //5
  "Mrs. Milkerton", //6
  "Mark", //7
  "Avery", //8
  "Avery", //9
  "Mark", //10
  "Mrs. Milkerton", //11
  "Mark", //12
  "Mark", //13
  "Avery", //14
  "Narrator", //15
  "Narrator", //16
  "Mrs. Milkerton", //17
  "Mark", //18
  "Mrs. Milkerton", //19
  "Mark", //20
  "Mrs. Milkerton", //21
  "Mark", //22
  "Mrs. Milkerton", //23
  "Mark", //24
];

let index2_1 = 0;
let index2_2 = 0;

// Choices 3

let dialogue3_1 = [
  `Yes, I got all of that.`, //0
  `Good! Now how about you solve this problem?`, //1
  `(Uhh… What the hell is this?!)`, //2
  `Uhh… hmm… I’m actually quite hungry. I’m going to go eat.`, //3
  `Is it really lunchtime already? Goodness me! Well since you 
are already here… why not eat together with me?`, //4
  ``, //5
];

let names3_1 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mark", //2
  "Mark", //3
  "Mrs. Milkerton", //4
  "Mark", //5
];

let dialogue3_2 = [
  `All of that information just to solve x?`, //0
  `Why yes! Let’s walk through a problem together, okay? So 
for this equation “3x + 4 = 7x + 9”...`, //1
  `*After the explanation*`, //2
  `I… think I get it.`, //3
  `That’s good! Let’s do a few more problems and then I will 
  let you solve it on your own.`, //4
  `I don’t think that is necessary. Lunch is almost about to end.`, //5
  `Did I really go overtime? Goodness me! Well since you are 
already here… why not eat together with me?`, //6
  ``, //7
];

let names3_2 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Narrator", //2
  "Mark", //3
  "Mrs. Milkerton", //4
  "Mark", //5
  "Mrs. Milkerton", //6
  "Mark", //7
];

let dialogue3_3 = [
  `Huh?`, //0
  `Seems like I didn’t explain it clearly enough. It’s okay, we 
can always go over it again.`, //1
  `*After the explanation*`, //2
  `I… think I get it.`, //3
  `That’s good! Let’s do a few more problems and then I will 
  let you solve it on your own.`, //4
  `I don’t think that is necessary. Lunch is almost about to end.`, //5
  `Did I really go overtime? Goodness me! Well since you are 
already here… why not eat together with me?`, //6
  ``, //7
];

let index3_1 = 0;
let index3_2 = 0;

// Workout

let dialogue4_1 = [
  `Nah, I’m good.`, //0
  `Is that so… what a shame… Well I hope you enjoy your lunch!`, //1
  `*Out in the courtyard*`, //2
  `Thank god that lecture was over… my brain was about to explode… 
Welp, time to gulp down another protein shake!`, //3
  `*gulp* Ahh… Alright. Time to go back to my routine. Where did 
  I leave off in the morning…`, //4
  `Oh right it was here!`, //5
  `You take out your dumbbells from your backpack and continue your 
workout routine until lunch ends. Eventually, the bell rings.`, //6
  `Lunch is already over? Ugh… that woman took up too much of 
my time…`, //7
  `Where do you think you are going, Marky?`, //8
  `Huh? Avery, lunch is over.`, //9
  `Who said that we have to go to class after lunch? You know our 
new math teacher? She’s getting way too close.`, //10
  `She thinks she can win you over when she’s just met you while 
  I have known you for most of your life.`, //11
  `If you are thinking of even being with her… well let’s just 
say the school would have to find us a new math teacher.`, //12
  ``, //13
];

let names4_1 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Narrator", //2
  "Mark", //3
  "Mark", //4
  "Mark", //5
  "Narrator", //6
  "Mark", //7
  "Avery", //8
  "Mark", //9
  "Avery", //10
  "Avery", //11
  "Avery", //12
  "Mark", //13
];

let index4_1 = 0;

let dialogue5A1 = [
  `You know that’s a crime, right?`, //0
  `Who cares, I’ll kill the officers too. Anything to make sure 
that the only person who can come in contact with you is me.`, //1
  `I’m getting out of here…`, //2
  ``, //3
  `Huh? Where are you going? Come back here!`, //4
  `You eventually get away from Avery.`, //5
  `*In the school hallway*`, //6
  `Phew, finally got away from that annoying femboy. He could 
keep up with me more than I expected, I need to work out on 
the treadmill later and maybe do leg day tonight.`, //7
  `Now this should be my next class. Once I’m done with the 
one right after this one, I’ll finally be able to go home 
for the day.`, //8
  `Eventually you got done with your last class for the day. You 
walk out of the school gates.`, //9
  `Man, finally I am all done with classes. Now then, after some 
workouts at home, I can work out at the gym. I need to work 
out my legs if someone can catch up to me so easily.`, //10
  `Marky! You leaving already?`, //11
  `You know I have to dip after the bell rings frame 1… and take 
a dump.`, //12
  `Without me?`, //13
  `I'm going to touch you.`, //14
  `Please do~`, //15
  `Ugh… You’re so gay.`, //16
  `Marky, I know you want to work out but you are behind in math. 
At least let me help you.`, //17
  `I can learn math in school, I don’t need tutoring.`, //18
  `Don’t be like that! Come on, I promise it won’t take too long.`, //19
  `No thanks.`, //20
  ``, //21
  `Hey! Come back here!`, //22
  `After getting away from Avery for a second time, you arrive
back home.`, //23
  `Finally. Home sweet home. Gotta lock up this place before Avery 
chases me here.`, //24
  `After you lock up the place, you wait a few hours for Avery 
to leave before going to the gym to work on your legs.`, //25
  `After leg day, you return home to eat a 10lb steak and 3 protein 
  shakes before going to bed. And so was the end of that hectic 
  first day.`, //26
  `The End

  Note: Try picking different dialogue options to see a different ending!`, //27
];

let dialogue5A2 = [
  `I’m not helping you this time.`, //0
  `Aww… well whatever. You will be helping me the next time and 
the next time and the next time… forever.`, //1
  `I’m getting out of here…`, //2
  ``, //3
  `Huh? Where are you going? Come back here!`, //4
  `You eventually get away from Avery.`, //5
  `*In the school hallway*`, //6
  `Phew, finally got away from that annoying femboy. He could 
keep up with me more than I expected, I need to work out on 
the treadmill later and maybe do leg day tonight.`, //7
  `Now this should be my next class. Once I’m done with the 
one right after this one, I’ll finally be able to go home 
for the day.`, //8
  `Eventually you got done with your last class for the day. You 
walk out of the school gates.`, //9
  `Man, finally I am all done with classes. Now then, after some 
workouts at home, I can work out at the gym. I need to work 
out my legs if someone can catch up to me so easily.`, //10
  `Marky! You leaving already?`, //11
  `You know I have to dip after the bell rings frame 1… and take 
a dump.`, //12
  `Without me?`, //13
  `I'm going to touch you.`, //14
  `Please do~`, //15
  `Ugh… You’re so gay.`, //16
  `Marky, I know you want to work out but you are behind in math. 
At least let me help you.`, //17
  `I can learn math in school, I don’t need tutoring.`, //18
  `Don’t be like that! Come on, I promise it won’t take too long.`, //19
  `No thanks.`, //20
  ``, //21
  `Hey! Come back here!`, //22
  `After getting away from Avery for a second time, you arrive
back home.`, //23
  `Finally. Home sweet home. Gotta lock up this place before Avery 
chases me here.`, //24
  `After you lock up the place, you wait a few hours for Avery 
to leave before going to the gym to work on your legs.`, //25
  `After leg day, you return home to eat a 10lb steak and 3 protein 
  shakes before going to bed. And so was the end of that hectic 
  first day.`, //26
  `The End
  
  Note: Try picking different dialogue options to see a different ending!`, //27
];

let names5A1 = [
  "Mark", //0
  "Avery", //1
  "Mark", //2
  "", //3
  "Avery", //4
  "Narrator", //5
  "Narrator", //6
  "Mark", //7
  "Mark", //8
  "Narrator", //9
  "Mark", //10
  "Avery", //11
  "Mark", //12
  "Avery", //13
  "Mark", //14
  "Avery", //15
  "Mark", //16
  "Avery", //17
  "Mark", //18
  "Avery", //19
  "Mark", //20
  "", //21
  "Avery", //22
  "Narrator", //23
  "Mark", //24
  "Narrator", //25
  "Narrator", //26
  "Narrator", //27
];

let index5A1 = 0;

let dialogue5A3 = [
  `Huh?`, //0
  `You really like saying that, huh? Well I don’t blame you. Still, 
I wish you would pay more attention to me…`, //1
  `… Ugh… All I wanted was to lift more after this but it seems I 
can’t even do that.`, //2
  `Hey, where are you going?`, //3
  `Don’t follow me. I had enough of your nonsense.`, //4
  ``, //5
  `Hey! Come back Marky! Marky!`, //6
  `You eventually get away from Avery.`, //7
  `*In the school hallway*`, //8
  `Phew, finally got away from that annoying femboy. He could 
keep up with me more than I expected, I need to work out on 
the treadmill later and maybe do leg day tonight.`, //9
  `Now this should be my next class. Once I’m done with the 
one right after this one, I’ll finally be able to go home 
for the day.`, //10
  `Eventually you got done with your last class for the day. You 
walk out of the school gates.`, //11
  `Man, finally I am all done with classes. Now then, after some 
workouts at home, I can work out at the gym. I need to work 
out my legs if someone can catch up to me so easily.`, //12
  `Marky! You leaving already?`, //13
  `You know I have to dip after the bell rings frame 1… and take 
a dump.`, //14
  `Without me?`, //15
  `I'm going to touch you.`, //16
  `Please do~`, //17
  `Ugh… You’re so gay.`, //18
  `Marky, I know you want to work out but you are behind in math. 
At least let me help you.`, //19
  `I can learn math in school, I don’t need tutoring.`, //20
  `Don’t be like that! Come on, I promise it won’t take too long.`, //21
  `No thanks.`, //22
  ``, //23
  `Hey! Come back here!`, //24
  `After getting away from Avery for a second time, you arrive
back home.`, //25
  `Finally. Home sweet home. Gotta lock up this place before Avery 
chases me here.`, //26
  `After you lock up the place, you wait a few hours for Avery to 
  leave before going to the gym to work on your legs.`, //27
  `After leg day, you return home to eat a 10lb steak and 3 protein 
  shakes before going to bed. And so was the end of that hectic 
  first day.`, //28
  `The End
  
  Note: Try picking different dialogue options to see a different ending!`, //29
];

let names5A2 = [
  "Mark", //0
  "Avery", //1
  "Mark", //2
  "Avery", //3
  "Mark", //4
  "", //5
  "Avery", //6
  "Narrator", //7
  "Narrator", //8
  "Mark", //9
  "Mark", //10
  "Narrator", //11
  "Mark", //12
  "Avery", //13
  "Mark", //14
  "Avery", //15
  "Mark", //16
  "Avery", //17
  "Mark", //18
  "Avery", //19
  "Mark", //20
  "Avery", //21
  "Mark", //22
  "", //23
  "Avery", //24
  "Narrator", //25
  "Mark", //26
  "Narrator", //27
  "Narrator", //28
  "Narrator", //29
];

let index5A2 = 0;

//Mrs. Milkerton route

let dialogue4_2 = [
  `I guess...`, //0
  `Wonderful! Let’s head to the teacher’s lounge and eat there! 
Just for you, I prepared a special meal.`, //1
  `Uhh… okay…`, //2
  `*In the teacher’s lounge*`, //3
  `Okay, we are here. You know… for such hardworking students 
such as yourself, I brought some snacks for you to enjoy. 
I hope you like it…`, //4
  `This looks very expensive. How do you even afford this 
with a teacher’s salary?`, //5
  `I have my ways…`, //6
  `What, you sold your child or something?`, //7
  `Eheh… Don’t tell anyone… otherwise I’ll get fired. But that 
isn’t the point of this meal together… is it now?`, //8
  `Yeah, where’s my protein?`, //9
  `Your… protein? I’m a vegetarian but if you really do need 
some meat… I can get you some…`, //10
  `Please don’t say it like that…`, //11
  `*giggle* *touches his arms* Mmm… your arms… so strong… 
Tell me… how long… have you worked out for?`, //12
  `Ever since I knew a dumbbell existed.`, //13
  `So dedicated… Perhaps you can chase after me with the 
same dedication…`, //14
  ``, //15
];

let names4_2 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mark", //2
  "Narrator", //3
  "Mrs. Milkerton", //4
  "Mark", //5
  "Mrs. Milkerton", //6
  "Mark", //7
  "Mrs. Milkerton", //8
  "Mark", //9
  "Mrs. Milkerton", //10
  "Mark", //11
  "Mrs. Milkerton", //12
  "Mark", //13
  "Mrs. Milkerton", //14
  "Mark", //15
];

let index4_2 = 0;

let dialogue5B1 = [
  `Chill, I’m 17 years old!`, //0
  `Love shows no discrimination to age… Besides, in one year, 
you should be 18… and no one will bat an eye…`, //1
  `Still this is weird!`, //2
  `Perhaps it might be a little too early… No, that can’t be 
the case.`, //3
  `G-Get away!`, //4
  ``, //5
  `Come here!`, //6
  `You eventually get away from Mrs. Milkerton`, //7
  `*In the school hallway*`, //8
  `Phew, finally got away from that crazy woman. She could 
keep up with me more than I expected, I need to work out on 
the treadmill later and maybe do leg day tonight.`, //9
  `Now this should be my next class. Once I’m done with the 
one right after this one, I’ll finally be able to go home 
for the day.`, //10
  `Eventually you got done with your last class for the day. You 
walk out of the school gates.`, //11
  `Man, finally I am all done with classes. Now then, after some 
workouts at home, I can work out at the gym. I need to work 
out my legs if someone can catch up to me so easily.`, //12
  `Hey handsome, going home already?`, //13
  `Yeah, the bell just rang.`, //14
  `You don’t want to stay with me even just for a single moment?`, //15
  `Sorry, the gym calls for me.`, //16
  `That is such a shame. I seem to recall that you still don’t 
understand any of the questions on our pop quiz. Why don’t we 
go over those questions again?`, //17
  `Ugh… do I have to?`, //18
  `Why yes, I’ll make this worth 100% of your grade.`, //19
  `Hah! Bold of you to assume that I care about my math grade!`, //20
  `If you don’t stay with me after school, well you will have 
to stay in school for another year.`, //21
  `Seriously?`, //22
  `That’s right! Now come on…`, //23
  `Get away from me, woman!`, //24
  `After getting away from Mrs. Milkerton for a second time, 
you arrive back home.`, //25
  `Finally. Home sweet home. Gotta lock up this place before 
  Mrs. Milkerton chases me here.`, //26
  `After you lock up the place, you wait a few hours for 
Mrs. Milkerton to leave before going to the gym to work 
on your legs.`, //27
  `After leg day, you return home to eat a 10lb steak and 3 protein 
  shakes before going to bed. And so was the end of that hectic 
  first day.`, //28
  `The End
  
  Note: Try picking different dialogue options to see a different ending!`, //29
];

let index5B1 = 0;

let names5B1 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mark", //2
  "Mrs. Milkerton", //3
  "Mark", //4
  "", //5
  "Mrs. Milkerton", //6
  "Narrator", //7
  "Narrator", //8
  "Mark", //9
  "Mark", //10
  "Narrator", //11
  "Mark", //12
  "Mrs. Milkerton", //13
  "Mark", //14
  "Mrs. Milkerton", //15
  "Mark", //16
  "Mrs. Milkerton", //17
  "Mark", //18
  "Mrs. Milkerton", //19
  "Mark", //20
  "Mrs. Milkerton", //21
  "Mark", //22
  "Mrs. Milkerton", //23
  "Mark", //24
  "Narrator", //25
  "Mark", //26
  "Narrator", //27
  "Narrator", //28
  "Narrator", //29
];

let dialogue5B2 = [
  `Aren’t you a teacher?`, //0
  `Perhaps, but what does that have to do with this?`, //1
  `It has everything to do with that! You’re trying to groom me!`, //2
  `Grooming implies I’m trying to change you into being a perfect 
man but that isn’t the case. You are already perfect.`, //3
  `I’ve always yearned for such a strong… strong young man 
like yourself.`, //4
  `G-Get away!`, //5
  ``, //6
  `Come here!`, //7
  `You eventually get away from Mrs. Milkerton`, //8
  `*In the school hallway*`, //9
  `Phew, finally got away from that crazy woman. She could 
keep up with me more than I expected, I need to work out on 
the treadmill later and maybe do leg day tonight.`, //10
  `Now this should be my next class. Once I’m done with the 
one right after this one, I’ll finally be able to go home 
for the day.`, //11
  `Eventually you got done with your last class for the day. You 
walk out of the school gates.`, //12
  `Man, finally I am all done with classes. Now then, after some 
workouts at home, I can work out at the gym. I need to work 
out my legs if someone can catch up to me so easily.`, //13
  `Hey handsome, going home already?`, //14
  `Yeah, the bell just rang.`, //15
  `You don’t want to stay with me even just for a single moment?`, //16
  `Sorry, the gym calls for me.`, //17
  `That is such a shame. I seem to recall that you still don’t 
understand any of the questions on our pop quiz. Why don’t we 
go over those questions again?`, //18
  `Ugh… do I have to?`, //19
  `Why yes, I’ll make this worth 100% of your grade.`, //20
  `Hah! Bold of you to assume that I care about my math grade!`, //21
  `If you don’t stay with me after school, well you will have 
to stay in school for another year.`, //22
  `Seriously?`, //23
  `That’s right! Now come on…`, //24
  `Get away from me, woman!`, //25
  `After getting away from Mrs. Milkerton for a second time, 
you arrive back home.`, //26
  `Finally. Home sweet home. Gotta lock up this place before 
  Mrs. Milkerton chases me here.`, //27
  `After you lock up the place, you wait a few hours for 
Mrs. Milkerton to leave before going to the gym to work 
on your legs.`, //28
  `After leg day, you return home to eat a 10lb steak and 3 protein 
  shakes before going to bed. And so was the end of that hectic 
  first day.`, //29
  `The End
  
  Note: Try picking different dialogue options to see a different ending!`, //30
];

let names5B2 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Mark", //2
  "Mrs. Milkerton", //3
  "Mrs. Milkerton", //4
  "Mark", //5
  "", //6
  "Mrs. Milkerton", //7
  "Narrator", //8
  "Narrator", //9
  "Mark", //10
  "Mark", //11
  "Narrator", //12
  "Mark", //13
  "Mrs. Milkerton", //14
  "Mark", //15
  "Mrs. Milkerton", //16
  "Mark", //17
  "Mrs. Milkerton", //18
  "Mark", //19
  "Mrs. Milkerton", //20
  "Mark", //21
  "Mrs. Milkerton", //22
  "Mark", //23
  "Mrs. Milkerton", //24
  "Mark", //25
  "Narrator", //26
  "Mark", //27
  "Narrator", //28
  "Narrator", //29
  "Narrator", //30
];

let index5B2 = 0;

let dialogue5B3 = [ //uses 5B1's names and index
  `Huh?`, //0
  `Playing innocent, are you? *touches his face* How adorable…`, //1
  `Why are you touching me there? Isn’t it just the first day?`, //2
  `First day means it is the first day to mingle with me. 
Now come here.`, //3
  `G-Get away!`, //4
  ``, //5
  `Come here!`, //6
  `You eventually get away from Mrs. Milkerton`, //7
  `*In the school hallway*`, //8
  `Phew, finally got away from that crazy woman. She could 
keep up with me more than I expected, I need to work out on 
the treadmill later and maybe do leg day tonight.`, //9
  `Now this should be my next class. Once I’m done with the 
one right after this one, I’ll finally be able to go home 
for the day.`, //10
  `Eventually you got done with your last class for the day. You 
walk out of the school gates.`, //11
  `Man, finally I am all done with classes. Now then, after some 
workouts at home, I can work out at the gym. I need to work 
out my legs if someone can catch up to me so easily.`, //12
  `Hey handsome, going home already?`, //13
  `Yeah, the bell just rang.`, //14
  `You don’t want to stay with me even just for a single moment?`, //15
  `Sorry, the gym calls for me.`, //16
  `That is such a shame. I seem to recall that you still don’t 
understand any of the questions on our pop quiz. Why don’t we 
go over those questions again?`, //17
  `Ugh… do I have to?`, //18
  `Why yes, I’ll make this worth 100% of your grade.`, //19
  `Hah! Bold of you to assume that I care about my math grade!`, //20
  `If you don’t stay with me after school, well you will have 
to stay in school for another year.`, //21
  `Seriously?`, //22
  `That’s right! Now come on…`, //23
  `Get away from me, woman!`, //24
  `After getting away from Mrs. Milkerton for a second time, 
you arrive back home.`, //25
  `Finally. Home sweet home. Gotta lock up this place before 
  Mrs. Milkerton chases me here.`, //26
  `After you lock up the place, you wait a few hours for 
Mrs. Milkerton to leave before going to the gym to work 
on your legs.`, //27
  `After leg day, you return home to eat a 10lb steak and 3 protein 
  shakes before going to bed. And so was the end of that hectic 
  first day.`, //28
  `The End
  
  Note: Try picking different dialogue options to see a different ending!`, //29
];

//Femboy route

let dialogue4_3 = [
  `I’m going to join someone else.`, //0
  `Is that so… what a shame… Well I hope you enjoy your lunch!`, //1
  `In the cafeteria, Avery waves at you to sit next to him.`, //2
  `Marky! Here! Sit with me!`, //3
  `Alright…`, //4
  `So… how’s that tutoring? Did that teacher do a good job 
teaching you?`, //5
  `Ughh… don’t talk about it…`, //6
  `I knew it. No one can do a better job than me. You should 
just let me teach you.`, //7
  `Shut up, Avery. You know that if you did the tutoring, 
we’d be here all day.`, //8
  `I don’t mind being with you all day. In fact, I don’t mind 
being with you all day every day, if you know what I mean.`, //9
  `I don’t like what you are implying…`, //10
  `*Scoots a little closer* Eheheheh! Don’t be so nervous! I 
  am your knight in shining armor! If anyone dares to harm you… 
  they won’t live to see another day…`, //11
  ``, //12
];

let names4_3 = [
  "Mark", //0
  "Mrs. Milkerton", //1
  "Narrator", //2
  "Avery", //3
  "Mark", //4
  "Avery", //5
  "Mark", //6
  "Avery", //7
  "Mark", //8
  "Avery", //9
  "Mark", //10
  "Avery", //11
  "Mark", //12
];

let index4_3 = 0;

function preload() {

  //Backgrounds
  bg1 = loadImage("bg/bg1.png");
  bg2 = loadImage("bg/bg2.png");
  bg3 = loadImage("bg/bg3.png");
  bg4 = loadImage("bg/bg4.png");
  bg5 = loadImage("bg/bg5.png");
  bg6 = loadImage("bg/bg6.png");
  bg7 = loadImage("bg/bg7.png");
  bg8 = loadImage("bg/bg8.png");

  //Mark

  mark1 = loadImage("mark/mark_normal.png");
  mark2 = loadImage("mark/mark_annoyed.png");
  mark3 = loadImage("mark/mark_angry.png");
  mark4 = loadImage("mark/mark_nervous.png");
  mark5 = loadImage("mark/mark_confused.png");
  mark6 = loadImage("mark/mark_happy.png");
  mark7 = loadImage("mark/mark_relieved.png");

  //Avery

  avery1 = loadImage("avery/avery_normal.png");
  avery2 = loadImage("avery/avery_yandere.png");
  avery3 = loadImage("avery/avery_lustful.png");
  avery4 = loadImage("avery/avery_excited.png");
  avery5 = loadImage("avery/avery_curious.png");
  avery6 = loadImage("avery/avery_pout.png");

  //Mrs. Milkerton

  milk1 = loadImage("milk/milk_normal.png");
  milk2 = loadImage("milk/milk_delighted.png");
  milk3 = loadImage("milk/milk_seductive.png");
  milk4 = loadImage("milk/milk_disappointed.png");
  milk5 = loadImage("milk/milk_winking.png");
  milk6 = loadImage("milk/milk_angry.png");

  // Text

  text_box = loadImage("text/text_box.png");
  name_tag = loadImage("text/name_tag.png");

  //Title

  cover = loadImage("title.png");

}

function setup() {
  createCanvas(1200, 850);
  state = "title";
  index = 0;
}

function draw() {
  background(80);
  if (state === "title") {
    title();
  } else if (state === "intro") {
    intro();
  } else if (state === "choices") {
    choices();
  } else if (state === "choices0_1") {
    choices0_1();
  } else if (state === "choices0_2") {
    choices0_2();
  } else if (state === "choices0_3") {
    choices0_3();
  } else if (state === "choices1_1") {
    choices1_1();
  } else if (state === "choices1_2") {
    choices1_2();
  } else if (state === "choices1_3") {
    choices1_3();
  } else if (state === "choices2_1") {
    choices2_1();
  } else if (state === "choices2_2") {
    choices2_2();
  } else if (state === "choices2_3") {
    choices2_3();
  } else if (state === "choices3_1") {
    choices3_1();
  } else if (state === "choices3_2") {
    choices3_2();
  } else if (state === "choices3_3") {
    choices3_3();
  } else if (state === "choices4_1") {
    choices4_1();
  } else if (state === "choices4_2") {
    choices4_2();
  } else if (state === "choices4_3") {
    choices4_3();
  } else if (state === "choices5A1") {
    choices5A1();
  } else if (state === "choices5A2") {
    choices5A2();
  } else if (state === "choices5A3") {
    choices5A3();
  } else if (state === "choices5B1") {
    choices5B1();
  } else if (state === "choices5B2") {
    choices5B2();
  } else if (state === "choices5B3") {
    choices5B3();
  } else if (state === "choices5C1") {
    choices5C1();
  } else if (state === "choices5C2") {
    choices5C2();
  } else if (state === "choices5C3") {
    choices5C3();
  }
}

function title() {
  
  image(cover, 0, 0, 1200, 850);

  //text stuff

  textFont("Alice");
  textSize(70);
  textAlign(CENTER);
  fill(255);
  textSize(50);
  text("Click anywhere to start", 600, 800);

  //button

  if (mouseX > 0 && mouseX < 1200 && mouseY > 0 && mouseY < 800) {
    if (mouseIsPressed) {
      state = "intro";
    }
  } else {
    cursor(ARROW);
  }
}

function intro() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index < 4){
    image(bg1, 0, 0, 1200, 800);
  };

  if(index > 3 && index <= 13){
    image(bg2, 0, 0, 1200, 800);
  }

  //Mark

  if(index > 4 && index < 7){
    image(mark2, 0, 0, 500, 750);
  } 

  if(index > 6 && index < 10){
    image(mark1, 0, 0, 500, 750);
  }

  if(index > 9 && index <= 13){
    image(mark5, 0, 0, 500, 750);
  }

  //Avery

  if(index > 5 && index < 8){
    image(avery4, 700, -50, 500, 750);
  }

  if(index > 7 && index < 9){
    image(avery6, 700, -50, 500, 750);
  }

  if(index > 8 && index < 11){
    image(avery5, 700, -50, 500, 750);
  }

  if(index > 10 && index < 12){
    image(avery3, 700, -50, 500, 750);
  }

  if(index > 11 && index <= 13){
    image(avery4, 700, -50, 500, 750);
  }



  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue[index], 600, 625);
  text(names[index], 600, 540);

  //Choices

  if (index === 13) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `"Ayo what’s wrong 
with you, man!"`,
      200,
      690
    ); //choice box 1
    text(`"Can you not?"`, 600, 710); //choice box 2
    text(`"Huh?!"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices0_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices0_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices0_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

//Choices 0

function choices0_1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index0 < 3){
    image(bg2, 0, 0, 1200, 800);
  }

  if(index0 > 2 && index0 < 7){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index0 > 6 && index0 <= 12){
    image(bg4, 0, 0, 1200, 800);
  }

  //Mark

  if(index0 < 2){
    image(mark3, 0, 0, 500, 750);
  }

  if(index0 > 1 && index0 < 7){
    image(mark2, 0, 0, 500, 750);
  }

  if(index0 > 8 && index0 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index0 > 10 && index0 <= 12){
    image(mark4, 0, 0, 500, 750);
  }

  //Avery

  if(index0 < 1){
    image(avery4, 700, -50, 500, 750);
  }

  if(index0 > 0 && index0 < 4){
    image(avery3, 700, -50, 500, 750);
  }

  if(index0 > 3 && index0 < 5){
    image(avery4, 700, -50, 500, 750);
  }  

  if(index0 > 4 && index0 < 7){
    image(avery5, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index0 > 8 && index0 < 10){
    image(milk1, 700, 0, 480, 750);
  }

  if(index0 > 9 && index0 <= 12){
    image(milk5, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue0_1[index0], 600, 625);
  text(names0[index0], 600, 540);

  //Choices

  if (index0 === 12) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `"“I… I am excited 
to learn, ma’am!”`,
      200,
      690
    ); //choice box 1
    text(`*Ignore her*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices0_2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index0 < 3){
    image(bg2, 0, 0, 1200, 800);
  }

  if(index0 > 2 && index0 < 7){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index0 > 6 && index0 <= 12){
    image(bg4, 0, 0, 1200, 800);
  }
  
  //Mark

  if(index0 < 2){
    image(mark3, 0, 0, 500, 750);
  }

  if(index0 > 1 && index0 < 7){
    image(mark2, 0, 0, 500, 750);
  }

  if(index0 > 8 && index0 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index0 > 10 && index0 <= 12){
    image(mark4, 0, 0, 500, 750);
  }

  //Avery

  if(index0 < 1){
    image(avery4, 700, -50, 500, 750);
  }

  if(index0 > 0 && index0 < 4){
    image(avery3, 700, -50, 500, 750);
  }

  if(index0 > 3 && index0 < 5){
    image(avery4, 700, -50, 500, 750);
  }  

  if(index0 > 4 && index0 < 7){
    image(avery5, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index0 > 8 && index0 < 10){
    image(milk1, 700, 0, 480, 750);
  }

  if(index0 > 9 && index0 <= 12){
    image(milk5, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue0_2[index0], 600, 625);
  text(names0[index0], 600, 540);

  //Choices

  if (index0 === 12) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `"“I… I am excited 
to learn, ma’am!”`,
      200,
      690
    ); //choice box 1
    text(`*Ignore her*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices0_3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index0 < 3){
    image(bg2, 0, 0, 1200, 800);
  }

  if(index0 > 2 && index0 < 7){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index0 > 6 && index0 <= 12){
    image(bg4, 0, 0, 1200, 800);
  }

  //Mark

  if(index0 < 2){
    image(mark3, 0, 0, 500, 750);
  }

  if(index0 > 1 && index0 < 7){
    image(mark2, 0, 0, 500, 750);
  }

  if(index0 > 8 && index0 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index0 > 10 && index0 <= 12){
    image(mark4, 0, 0, 500, 750);
  }

  //Avery

  if(index0 < 1){
    image(avery4, 700, -50, 500, 750);
  }

  if(index0 > 0 && index0 < 4){
    image(avery3, 700, -50, 500, 750);
  }

  if(index0 > 3 && index0 < 5){
    image(avery4, 700, -50, 500, 750);
  }  

  if(index0 > 4 && index0 < 7){
    image(avery5, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index0 > 8 && index0 < 10){
    image(milk1, 700, 0, 480, 750);
  }

  if(index0 > 9 && index0 <= 12){
    image(milk5, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue0_3[index0], 600, 625);
  text(names0[index0], 600, 540);

  //Choices

  if (index0 === 12) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `"“I… I am excited 
to learn, ma’am!”`,
      200,
      690
    ); //choice box 1
    text(`*Ignore her*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices1_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

//Choices 1

function choices1_1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index1 < 2){
    image(mark4, 0, 0, 500, 750);
  }

  if(index1 > 5 && index1 < 9){
    image(mark2, 0, 0, 500, 750);
  }

  if(index1 > 9 && index1 < 11){
    image(mark5, 0, 0, 500, 750);
  }

  if(index1 > 10 && index1 <= 14){
    image(mark2, 0, 0, 500, 750);
  }

  //Avery

  if(index1 > 4 && index1 < 7){
    image(avery4, 700, -50, 500, 750);
  }

  if(index1 > 11 && index1 < 13){
    image(avery4, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index1 < 1){
    image(milk5, 700, 0, 480, 750);
  }

  if(index1 > 0 && index1 < 2){
    image(milk2, 700, 0, 480, 750);
  }

  if(index1 > 1 && index1 < 3){
    image(milk1, 700, 0, 480, 750);
  }

  if(index1 > 6 && index1 < 9){
    image(milk1, 700, 0, 480, 750);
  }

  if(index1 > 12 && index1 <= 14){
    image(milk6, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue1_1[index1], 600, 625);
  text(names1[index1], 600, 540);

  //Choices

  if (index1 === 14) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(`*Deny cheating*`, 200, 710); //choice box 1
    text(`*Ignore her*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices1_2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index1 > 5 && index1 < 9){
    image(mark2, 0, 0, 500, 750);
  }

  if(index1 > 9 && index1 < 11){
    image(mark5, 0, 0, 500, 750);
  }

  if(index1 > 10 && index1 <= 14){
    image(mark2, 0, 0, 500, 750);
  }

  //Avery

  if(index1 > 4 && index1 < 7){
    image(avery4, 700, -50, 500, 750);
  }

  if(index1 > 11 && index1 < 13){
    image(avery4, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index1 < 1){
    image(milk5, 700, 0, 480, 750);
  }

  if(index1 > 0 && index1 < 2){
    image(milk3, 700, 0, 480, 750);
  }

  if(index1 > 1 && index1 < 3){
    image(milk1, 700, 0, 480, 750);
  }

  if(index1 > 6 && index1 < 9){
    image(milk1, 700, 0, 480, 750);
  }

  if(index1 > 12 && index1 <= 14){
    image(milk6, 700, 0, 480, 750);
  }
  
  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue1_2[index1], 600, 625);
  text(names1[index1], 600, 540);

  //Choices

  if (index1 === 14) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(`*Deny cheating*`, 200, 710); //choice box 1
    text(`*Ignore her*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices1_3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index1 < 2){
    image(mark5, 0, 0, 500, 750);
  }

  if(index1 > 5 && index1 < 9){
    image(mark2, 0, 0, 500, 750);
  }

  if(index1 > 9 && index1 < 11){
    image(mark5, 0, 0, 500, 750);
  }

  if(index1 > 10 && index1 <= 14){
    image(mark2, 0, 0, 500, 750);
  }

  //Avery

  if(index1 > 4 && index1 < 7){
    image(avery4, 700, -50, 500, 750);
  }

  if(index1 > 11 && index1 < 13){
    image(avery4, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index1 < 1){
    image(milk5, 700, 0, 480, 750);
  }

  if(index1 > 0 && index1 < 2){
    image(milk3, 700, 0, 480, 750);
  }

  if(index1 > 1 && index1 < 3){
    image(milk1, 700, 0, 480, 750);
  }

  if(index1 > 6 && index1 < 9){
    image(milk1, 700, 0, 480, 750);
  }

  if(index1 > 12 && index1 <= 14){
    image(milk6, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue1_3[index1], 600, 625);
  text(names1[index1], 600, 540);

  //Choices

  if (index1 === 14) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(`*Deny cheating*`, 200, 710); //choice box 1
    text(`*Ignore her*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices2_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

//Choices 2

function choices2_1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index2_1 < 2){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_1 > 1 && index2_1 < 3){
    image(mark1, 0, 0, 500, 750);
  }

  if(index2_1 > 4 && index2_1 < 8){
    image(mark2, 0, 0, 500, 750);
  }

  if(index2_1 > 7 && index2_1 < 10){
    image(mark3, 0, 0, 500, 750);
  }

  if(index2_1 > 9 && index2_1 < 13){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_1 > 15 && index2_1 < 18){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_1 > 17 && index2_1 <= 22){
    image(mark2, 0, 0, 500, 750);
  }

  //Avery

  if(index2_1 > 5 && index2_1 < 7){
    image(avery1, 700, -50, 500, 750);
  }

  if(index2_1 > 6 && index2_1 < 9){
    image(avery6, 700, -50, 500, 750);
  }

  if(index2_1 > 11 && index2_1 < 13){
    image(avery4, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index2_1 < 3){
    image(milk6, 700, 0, 480, 750);
  }

  if(index2_1 > 3 && index2_1 < 5){
    image(milk2, 700, 0, 480, 750);
  }

  if(index2_1 > 8 && index2_1 < 12){
    image(milk1, 700, 0, 480, 750);
  }

  if(index2_1 > 14 && index2_1 < 17){
    image(milk5, 700, 0, 480, 750);
  }

  if(index2_1 > 16 && index2_1 < 21){
    image(milk1, 700, 0, 480, 750);
  }

  if(index2_1 > 20 && index2_1 <= 22){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue2_1[index2_1], 600, 625);
  text(names2_1[index2_1], 600, 540);

  //Choices

  if (index2_1 === 22) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `“Yes, I got all 
of that.”`,
      200,
      690
    ); //choice box 1
    text(`*Question info*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices2_2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index2_1 < 3){
    image(mark1, 0, 0, 500, 750);
  }

  if(index2_1 > 4 && index2_1 < 8){
    image(mark2, 0, 0, 500, 750);
  }

  if(index2_1 > 7 && index2_1 < 10){
    image(mark3, 0, 0, 500, 750);
  }

  if(index2_1 > 9 && index2_1 < 13){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_1 > 15 && index2_1 < 18){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_1 > 17 && index2_1 <= 22){
    image(mark2, 0, 0, 500, 750);
  }

  //Avery

  if(index2_1 > 5 && index2_1 < 7){
    image(avery1, 700, -50, 500, 750);
  }

  if(index2_1 > 6 && index2_1 < 9){
    image(avery6, 700, -50, 500, 750);
  }

  if(index2_1 > 11 && index2_1 < 13){
    image(avery4, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index2_1 < 3){
    image(milk6, 700, 0, 480, 750);
  }

  if(index2_1 > 3 && index2_1 < 5){
    image(milk2, 700, 0, 480, 750);
  }

  if(index2_1 > 8 && index2_1 < 12){
    image(milk1, 700, 0, 480, 750);
  }

  if(index2_1 > 14 && index2_1 < 17){
    image(milk5, 700, 0, 480, 750);
  }

  if(index2_1 > 16 && index2_1 < 21){
    image(milk1, 700, 0, 480, 750);
  }

  if(index2_1 > 20 && index2_1 <= 22){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue2_2[index2_1], 600, 625);
  text(names2_1[index2_1], 600, 540);

  //Choices

  if (index2_1 === 22) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `“Yes, I got all 
of that.”`,
      200,
      690
    ); //choice box 1
    text(`*Question info*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices2_3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index2_2 < 4){
    image(mark5, 0, 0, 500, 750);
  }

  if(index2_2 > 3 && index2_2 < 5){
    image(mark1, 0, 0, 500, 750);
  }

  if(index2_2 > 6 && index2_2 < 10){
    image(mark2, 0, 0, 500, 750);
  }

  if(index2_2 > 9 && index2_2 < 12){
    image(mark3, 0, 0, 500, 750);
  }

  if(index2_2 > 11 && index2_2 < 15){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_2 > 17 && index2_2 < 20){
    image(mark4, 0, 0, 500, 750);
  }

  if(index2_2 > 19 && index2_2 <= 24){
    image(mark2, 0, 0, 500, 750);
  }

  //Avery

  if(index2_2 > 7 && index2_2 < 9){
    image(avery1, 700, -50, 500, 750);
  }

  if(index2_2 > 8 && index2_2 < 11){
    image(avery6, 700, -50, 500, 750);
  }

  if(index2_2 > 13 && index2_2 < 15){
    image(avery4, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index2_2 < 5){
    image(milk6, 700, 0, 480, 750);
  }

  if(index2_2 > 5 && index2_2 < 7){
    image(milk2, 700, 0, 480, 750);
  }

  if(index2_2 > 10 && index2_2 < 14){
    image(milk1, 700, 0, 480, 750);
  }

  if(index2_2 > 16 && index2_2 < 19){
    image(milk5, 700, 0, 480, 750);
  }

  if(index2_2 > 18 && index2_2 < 23){
    image(milk1, 700, 0, 480, 750);
  }

  if(index2_2 > 22 && index2_2 <= 24){
    image(milk3, 700, 0, 480, 750);
  }


  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue2_3[index2_2], 600, 625);
  text(names2_2[index2_2], 600, 540);

  //Choices

  if (index2_2 === 24) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `“Yes, I got all 
of that.”`,
      200,
      690
    ); //choice box 1
    text(`*Question info*`, 600, 710); //choice box 2
    text(`"Huh?"`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices3_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

//Choices 3

function choices3_1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index3_1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index3_1 > 1 && index3_1 < 3){
    image(mark5, 0, 0, 500, 750);
  }

  if(index3_1 > 2 && index3_1 <= 5){
    image(mark4, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index3_1 < 1){
    image(milk3, 700, 0, 480, 750);
  }

  if(index3_1 > 0 && index3_1 < 4){
    image(milk2, 700, 0, 480, 750);
  }

  if(index3_1 > 3 && index3_1 <= 5){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue3_1[index3_1], 600, 625);
  text(names3_1[index3_1], 600, 540);

  //Choices

  if (index3_1 === 5) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(`“Nah, I’m good.”`, 200, 710); //choice box 1
    text(`“I guess…”`, 600, 710); //choice box 2
    text(
      `“I’m going to 
join someone else.”`,
      1000,
      690
    ); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices3_2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index3_2 < 2){
    image(mark5, 0, 0, 500, 750);
  }

  if(index3_2 > 2 && index3_2 <= 7){
    image(mark1, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index3_2 < 1){
    image(milk3, 700, 0, 480, 750);
  }

  if(index3_2 > 0 && index3_2 < 2){
    image(milk2, 700, 0, 480, 750);
  }

  if(index3_2 > 2 && index3_2 < 6){
    image(milk2, 700, 0, 480, 750);
  }

  if(index3_2 > 5 && index3_2 <= 7){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue3_2[index3_2], 600, 625);
  text(names3_2[index3_2], 600, 540);

  //Choices

  if (index3_2 === 7) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(`“Nah, I’m good.”`, 200, 710); //choice box 1
    text(`“I guess…”`, 600, 710); //choice box 2
    text(
      `“I’m going to 
join someone else.”`,
      1000,
      690
    ); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices3_3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  image(bg4, 0, 0, 1200, 800);

  //Mark

  if(index3_2 < 2){
    image(mark5, 0, 0, 500, 750);
  }

  if(index3_2 > 2 && index3_2 <= 7){
    image(mark1, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index3_2 < 1){
    image(milk3, 700, 0, 480, 750);
  }

  if(index3_2 > 0 && index3_2 < 2){
    image(milk1, 700, 0, 480, 750);
  }

  if(index3_2 > 2 && index3_2 < 6){
    image(milk2, 700, 0, 480, 750);
  }

  if(index3_2 > 5 && index3_2 <= 7){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue3_3[index3_2], 600, 625);
  text(names3_2[index3_2], 600, 540);

  //Choices

  if (index3_2 === 7) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(`“Nah, I’m good.”`, 200, 710); //choice box 1
    text(`“I guess…”`, 600, 710); //choice box 2
    text(
      `“I’m going to 
join someone else.”`,
      1000,
      690
    ); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices4_3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

//Choices 4

function choices4_1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index4_1 < 2){
    image(bg4, 0, 0, 1200, 800);
  }

  if(index4_1 > 1 && index4_1 <= 13){
    image(bg5, 0, 0, 1200, 800);
  }

  //Mark

  if(index4_1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index4_1 > 2 && index4_1 < 5){
    image(mark7, 0, 0, 500, 750);
  }

  if(index4_1 > 4 && index4_1 < 6){
    image(mark6, 0, 0, 500, 750);
  }

  if(index4_1 > 6 && index4_1 < 9){
    image(mark2, 0, 0, 500, 750);
  }

  if(index4_1 > 8 && index4_1 <= 13){
    image(mark5, 0, 0, 500, 750);
  }

  //Avery

  if(index4_1 > 7 && index4_1 < 12){
    image(avery6, 700, -50, 500, 750);
  }

  if(index4_1 > 11 && index4_1 <= 13){
    image(avery2, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index4_1 < 1){
    image(milk3, 700, 0, 480, 750);
  }

  if(index4_1 > 0 && index4_1 < 2){
    image(milk1, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue4_1[index4_1], 600, 625);
  text(names4_1[index4_1], 600, 540);

  //Choices

  if (index4_1 === 13) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `“You know that’s 
a crime, right?”`,
      200,
      690
    ); //choice box 1
    text(
      `“I’m not helping 
you this time.”`,
      600,
      690
    ); //choice box 2
    text(`“Huh?`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5A1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5A2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5A3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices4_2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index4_2 < 3){
    image(bg4, 0, 0, 1200, 800);
  }

  if(index4_2 > 2 && index4_2 <= 15){
    image(bg6, 0, 0, 1200, 800);
  }

  //Mark

  if(index4_2 < 2){
    image(mark4, 0, 0, 500, 750);
  }

  if(index4_2 > 1 && index4_2 < 3){
    image(mark1, 0, 0, 500, 750);
  }

  if(index4_2 > 3 && index4_2 < 5){
    image(mark1, 0, 0, 500, 750);
  }

  if(index4_2 > 4 && index4_2 < 7){
    image(mark5, 0, 0, 500, 750);
  }

  if(index4_2 > 6 && index4_2 < 9){
    image(mark1, 0, 0, 500, 750);
  }

  if(index4_2 > 8 && index4_2 < 11){
    image(mark3, 0, 0, 500, 750);
  }

  if(index4_2 > 10 && index4_2 < 13){
    image(mark2, 0, 0, 500, 750);
  }

  if(index4_2 > 12 && index4_2 <= 15){
    image(mark6, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index4_2 < 1){
    image(milk3, 700, 0, 480, 750);
  }

  if(index4_2 > 0 && index4_2 < 3){
    image(milk2, 700, 0, 480, 750);
  }

  if(index4_2 > 3 && index4_2 < 6){
    image(milk2, 700, 0, 480, 750);
  }

  if(index4_2 > 5 && index4_2 < 8){
    image(milk5, 700, 0, 480, 750);
  }

  if(index4_2 > 7 && index4_2 < 12){
    image(milk3, 700, 0, 480, 750);
  }

  if(index4_2 > 11 && index4_2 <= 15){
    image(milk2, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue4_2[index4_2], 600, 625);
  text(names4_2[index4_2], 600, 540);

  //Choices

  if (index4_2 === 15) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `“Chill, I’m 17 
years old!`,
      200,
      690
    ); //choice box 1
    text(
      `“Aren’t you 
a teacher?”`,
      600,
      690
    ); //choice box 2
    text(`“Huh?`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5B1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5B2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5B3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

function choices4_3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index4_3 < 2){
    image(bg4, 0, 0, 1200, 800);
  }

  if(index4_3 > 1 && index4_3 <= 12){
    image(bg7, 0, 0, 1200, 800);
  }

  //Mark

  if(index4_3 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index4_3 > 3 && index4_3 < 6){
    image(mark1, 0, 0, 500, 750);
  }

  if(index4_3 > 5 && index4_3 < 10){
    image(mark2, 0, 0, 500, 750);
  }

  if(index4_3 > 9 && index4_3 <= 12){
    image(mark4, 0, 0, 500, 750);
  }

  //Avery

  if(index4_3 > 2 && index4_3 < 5){
    image(avery4, 700, -50, 500, 750);
  }

  if(index4_3 > 4 && index4_3 < 7){
    image(avery5, 700, -50, 500, 750);
  }

  if(index4_3 > 6 && index4_3 < 9){
    image(avery2, 700, -50, 500, 750);
  }

  if(index4_3 > 8 && index4_3 < 11){
    image(avery3, 700, -50, 500, 750);
  }

  if(index4_3 > 10 && index4_3 <= 12){
    image(avery2, 700, -50, 500, 750);
  }

  //Mrs. Milkerton

  if(index4_3 < 1){
    image(milk3, 700, 0, 480, 750);
  }

  if(index4_3 > 0 && index4_3 < 2){
    image(milk1, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue4_3[index4_3], 600, 625);
  text(names4_3[index4_3], 600, 540);

  //Choices

  if (index4_3 === 12) {
    fill(255);
    rect(200, 700, 300, 100); //choice box 1
    rect(600, 700, 300, 100); //choice box 2
    rect(1000, 700, 300, 100); //choice box 3
    fill(0);
    textSize(30);
    text(
      `“You know that’s 
a crime, right?”`,
      200,
      690
    ); //choice box 1
    text(
      `“I’m not helping 
you this time.”`,
      600,
      690
    ); //choice box 2
    text(`“Huh?`, 1000, 710); //choice box 3

    //Choice boxes

    if (mouseX > 50 && mouseX < 350 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5C1";
      }
    } else if (mouseX > 450 && mouseX < 750 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5C2";
      }
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > 650 && mouseY < 750) {
      cursor(HAND);
      if (mouseIsPressed) {
        state = "choices5C3";
      }
    } else {
      cursor(ARROW);
    }
  }
}

//Workout

function choices5A1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5A1 < 6){
    image(bg5, 0, 0, 1200, 800);
  }

  if(index5A1 > 5 && index5A1 < 9){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5A1 > 8 && index5A1 < 23){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5A1 > 22 && index5A1 <= 27){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5A1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 1 && index5A1 < 3){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 6 && index5A1 < 8){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5A1 > 7 && index5A1 < 9){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 9 && index5A1 < 12){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5A1 > 11 && index5A1 < 14){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 13 && index5A1 < 16){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 15 && index5A1 < 21){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A1 > 23 && index5A1 < 25){
    image(mark7, 0, 0, 500, 750);
  }

  //Avery

  if(index5A1 < 4){
    image(avery2, 700, -50, 500, 750);
  }

  if(index5A1 > 3 && index5A1 < 5){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 10 && index5A1 < 13){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 12 && index5A1 < 17){
    image(avery3, 700, -50, 500, 750);
  }

  if(index5A1 > 16 && index5A1 < 19){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A1 > 18 && index5A1 < 23){
    image(avery6, 700, -50, 500, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5A1[index5A1], 600, 625);
  text(names5A1[index5A1], 600, 540);
}

function choices5A2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5A1 < 6){
    image(bg5, 0, 0, 1200, 800);
  }

  if(index5A1 > 5 && index5A1 < 9){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5A1 > 8 && index5A1 < 23){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5A1 > 22 && index5A1 <= 27){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5A1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 1 && index5A1 < 3){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 6 && index5A1 < 8){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5A1 > 7 && index5A1 < 9){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 9 && index5A1 < 12){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5A1 > 11 && index5A1 < 14){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 13 && index5A1 < 16){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 15 && index5A1 < 21){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A1 > 23 && index5A1 < 25){
    image(mark7, 0, 0, 500, 750);
  }

  //Avery

  if(index5A1 < 4){
    image(avery2, 700, -50, 500, 750);
  }

  if(index5A1 > 3 && index5A1 < 5){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 10 && index5A1 < 13){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 12 && index5A1 < 17){
    image(avery3, 700, -50, 500, 750);
  }

  if(index5A1 > 16 && index5A1 < 19){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A1 > 18 && index5A1 < 23){
    image(avery6, 700, -50, 500, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5A2[index5A1], 600, 625);
  text(names5A1[index5A1], 600, 540);
}

function choices5A3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5A2 < 8){
    image(bg5, 0, 0, 1200, 800);
  }

  if(index5A2 > 7 && index5A2 < 11){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5A2 > 10 && index5A2 < 25){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5A2 > 24 && index5A2 <= 29){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5A2 < 2){
    image(mark5, 0, 0, 500, 750);
  }

  if(index5A2 > 1 && index5A2 < 4){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A2 > 3 && index5A2 < 5){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A2 > 8 && index5A2 < 10){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5A2 > 9 && index5A2 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A2 > 11 && index5A2 < 14){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5A2 > 13 && index5A2 < 16){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A2 > 15 && index5A2 < 18){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A2 > 17 && index5A2 < 23){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A2 > 25 && index5A2 < 27){
    image(mark7, 0, 0, 500, 750);
  }

  //Avery

  if(index5A2 < 1){
    image(avery2, 700, -50, 500, 750);
  }

  if(index5A2 > 0 && index5A2 < 3){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A2 > 2 && index5A2 < 7){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A2 > 12 && index5A2 < 15){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A2 > 14 && index5A2 < 19){
    image(avery3, 700, -50, 500, 750);
  }

  if(index5A2 > 18 && index5A2 < 21){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A2 > 20 && index5A2 < 25){
    image(avery6, 700, -50, 500, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5A3[index5A2], 600, 625);
  text(names5A2[index5A2], 600, 540);
}

// //Mrs. Milkerton route

function choices5B1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5B1 < 8){
    image(bg6, 0, 0, 1200, 800);
  }

  if(index5B1 > 7 && index5B1 < 11){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5B1 > 10 && index5B1 < 25){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5B1 > 24 && index5B1 <= 29){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5B1 < 5){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5B1 > 8 && index5B1 < 10){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5B1 > 9 && index5B1 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5B1 > 11 && index5B1 < 14){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5B1 > 13 && index5B1 < 18){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5B1 > 17 && index5B1 < 20){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5B1 > 19 && index5B1 < 22){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5B1 > 21 && index5B1 < 24){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5B1 > 23 && index5B1 < 25){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5B1 > 25 && index5B1 < 27){
    image(mark7, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index5B1 < 1){
    image(milk2, 700, 0, 480, 750);
  }

  if(index5B1 > 0 && index5B1 < 3){
    image(milk3, 700, 0, 480, 750);
  }

  if(index5B1 > 2 && index5B1 < 6){
    image(milk4, 700, 0, 480, 750);
  }

  if(index5B1 > 5 && index5B1 < 7){
    image(milk2, 700, 0, 480, 750);
  }

  if(index5B1 > 12 && index5B1 < 17){
    image(milk3, 700, 0, 480, 750);
  }

  if(index5B1 > 16 && index5B1 < 19){
    image(milk4, 700, 0, 480, 750);
  }

  if(index5B1 > 18 && index5B1 < 23){
    image(milk1, 700, 0, 480, 750);
  }

  if(index5B1 > 22 && index5B1 < 25){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5B1[index5B1], 600, 625);
  text(names5B1[index5B1], 600, 540);
}

function choices5B2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5B2 < 9){
    image(bg6, 0, 0, 1200, 800);
  }

  if(index5B2 > 8 && index5B2 < 12){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5B2 > 11 && index5B2 < 26){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5B2 > 25 && index5B2 <= 30){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5B2 < 2){
    image(mark5, 0, 0, 500, 750);
  }

  if(index5B2 > 1 && index5B2 < 6){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5B2 > 9 && index5B2 < 11){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5B2 > 10 && index5B2 < 12){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5B2 > 12 && index5B2 < 15){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5B2 > 14 && index5B2 < 19){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5B2 > 18 && index5B2 < 21){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5B2 > 20 && index5B2 < 23){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5B2 > 22 && index5B2 < 25){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5B2 > 24 && index5B2 < 26){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5B2 > 26 && index5B2 < 28){
    image(mark7, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index5B2 < 1){
    image(milk2, 700, 0, 480, 750);
  }

  if(index5B2 > 0 && index5B2 < 3){
    image(milk1, 700, 0, 480, 750);
  }

  if(index5B2 > 2 && index5B2 < 7){
    image(milk3, 700, 0, 480, 750);
  }

  if(index5B2 > 6 && index5B2 < 8){
    image(milk2, 700, 0, 480, 750);
  }

  if(index5B2 > 13 && index5B2 < 18){
    image(milk3, 700, 0, 480, 750);
  }

  if(index5B2 > 17 && index5B2 < 20){
    image(milk4, 700, 0, 480, 750);
  }

  if(index5B2 > 19 && index5B2 < 24){
    image(milk1, 700, 0, 480, 750);
  }

  if(index5B2 > 23 && index5B2 < 26){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5B2[index5B2], 600, 625);
  text(names5B2[index5B2], 600, 540);
}

function choices5B3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5B1 < 8){
    image(bg6, 0, 0, 1200, 800);
  }

  if(index5B1 > 7 && index5B1 < 11){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5B1 > 10 && index5B1 < 25){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5B1 > 24 && index5B1 <= 29){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5B1 < 5){
    image(mark5, 0, 0, 500, 750);
  }

  if(index5B1 > 8 && index5B1 < 10){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5B1 > 9 && index5B1 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5B1 > 11 && index5B1 < 14){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5B1 > 13 && index5B1 < 18){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5B1 > 17 && index5B1 < 20){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5B1 > 19 && index5B1 < 22){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5B1 > 21 && index5B1 < 24){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5B1 > 23 && index5B1 < 25){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5B1 > 25 && index5B1 < 27){
    image(mark7, 0, 0, 500, 750);
  }

  //Mrs. Milkerton

  if(index5B1 < 7){
    image(milk2, 700, 0, 480, 750);
  }

  if(index5B1 > 12 && index5B1 < 17){
    image(milk3, 700, 0, 480, 750);
  }

  if(index5B1 > 16 && index5B1 < 19){
    image(milk4, 700, 0, 480, 750);
  }

  if(index5B1 > 18 && index5B1 < 23){
    image(milk1, 700, 0, 480, 750);
  }

  if(index5B1 > 22 && index5B1 < 25){
    image(milk3, 700, 0, 480, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5B3[index5B1], 600, 625);
  text(names5B1[index5B1], 600, 540);
}

// // Avery route

function choices5C1() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5A1 < 6){
    image(bg7, 0, 0, 1200, 800);
  }

  if(index5A1 > 5 && index5A1 < 9){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5A1 > 8 && index5A1 < 23){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5A1 > 22 && index5A1 <= 27){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5A1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 1 && index5A1 < 3){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 6 && index5A1 < 8){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5A1 > 7 && index5A1 < 9){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 9 && index5A1 < 12){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5A1 > 11 && index5A1 < 14){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 13 && index5A1 < 16){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 15 && index5A1 < 21){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A1 > 23 && index5A1 < 25){
    image(mark7, 0, 0, 500, 750);
  }

  //Avery

  if(index5A1 < 4){
    image(avery2, 700, -50, 500, 750);
  }

  if(index5A1 > 3 && index5A1 < 5){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 10 && index5A1 < 13){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 12 && index5A1 < 17){
    image(avery3, 700, -50, 500, 750);
  }

  if(index5A1 > 16 && index5A1 < 19){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A1 > 18 && index5A1 < 23){
    image(avery6, 700, -50, 500, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5A1[index5A1], 600, 625);
  text(names5A1[index5A1], 600, 540);
}

function choices5C2() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5A1 < 6){
    image(bg7, 0, 0, 1200, 800);
  }

  if(index5A1 > 5 && index5A1 < 9){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5A1 > 8 && index5A1 < 23){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5A1 > 22 && index5A1 <= 27){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5A1 < 2){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 1 && index5A1 < 3){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 6 && index5A1 < 8){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5A1 > 7 && index5A1 < 9){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 9 && index5A1 < 12){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5A1 > 11 && index5A1 < 14){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A1 > 13 && index5A1 < 16){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A1 > 15 && index5A1 < 21){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A1 > 23 && index5A1 < 25){
    image(mark7, 0, 0, 500, 750);
  }

  //Avery

  if(index5A1 < 4){
    image(avery2, 700, -50, 500, 750);
  }

  if(index5A1 > 3 && index5A1 < 5){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 10 && index5A1 < 13){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A1 > 12 && index5A1 < 17){
    image(avery3, 700, -50, 500, 750);
  }

  if(index5A1 > 16 && index5A1 < 19){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A1 > 18 && index5A1 < 23){
    image(avery6, 700, -50, 500, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5A2[index5A1], 600, 625);
  text(names5A1[index5A1], 600, 540);
}

function choices5C3() {
  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(163, 194, 255);

  //Background Images

  if(index5A2 < 8){
    image(bg7, 0, 0, 1200, 800);
  }

  if(index5A2 > 7 && index5A2 < 11){
    image(bg8, 0, 0, 1200, 800);
  }

  if(index5A2 > 10 && index5A2 < 25){
    image(bg3, 0, 0, 1200, 800);
  }

  if(index5A2 > 24 && index5A2 <= 29){
    image(bg1, 0, 0, 1200, 800);
  }

  //Mark

  if(index5A2 < 2){
    image(mark5, 0, 0, 500, 750);
  }

  if(index5A2 > 1 && index5A2 < 4){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A2 > 3 && index5A2 < 5){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A2 > 8 && index5A2 < 10){
    image(mark7, 0, 0, 500, 750);
  }

  if(index5A2 > 9 && index5A2 < 11){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A2 > 11 && index5A2 < 14){
    image(mark6, 0, 0, 500, 750);
  }

  if(index5A2 > 13 && index5A2 < 16){
    image(mark1, 0, 0, 500, 750);
  }

  if(index5A2 > 15 && index5A2 < 18){
    image(mark2, 0, 0, 500, 750);
  }

  if(index5A2 > 17 && index5A2 < 23){
    image(mark3, 0, 0, 500, 750);
  }

  if(index5A2 > 25 && index5A2 < 27){
    image(mark7, 0, 0, 500, 750);
  }

  //Avery

  if(index5A2 < 1){
    image(avery2, 700, -50, 500, 750);
  }

  if(index5A2 > 0 && index5A2 < 3){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A2 > 2 && index5A2 < 7){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A2 > 12 && index5A2 < 15){
    image(avery6, 700, -50, 500, 750);
  }

  if(index5A2 > 14 && index5A2 < 19){
    image(avery3, 700, -50, 500, 750);
  }

  if(index5A2 > 18 && index5A2 < 21){
    image(avery1, 700, -50, 500, 750);
  }

  if(index5A2 > 20 && index5A2 < 25){
    image(avery6, 700, -50, 500, 750);
  }

  //dialogue
  image(text_box, 0, 550, 1200, 300);
  image(name_tag, 450, 480, 300, 100);
  fill(0);
  textSize(40);
  text(dialogue5A3[index5A2], 600, 625);
  text(names5A2[index5A2], 600, 540);
}

//this is how we are doing scene skipping

function mousePressed() {
  if (index < 13) {
    index++;
  }

  if (
    (state === "choices0_1" && index0 < 12) ||
    (state === "choices0_2" && index0 < 12) ||
    (state === "choices0_3" && index0 < 12)
  ) {
    index0++;
  }

  if (
    (state === "choices1_1" && index1 < 14) ||
    (state === "choices1_2" && index1 < 14) ||
    (state === "choices1_3" && index1 < 14)
  ) {
    index1++;
  }

  if (
    (state === "choices2_1" && index2_1 < 22) ||
    (state === "choices2_2" && index2_1 < 22)
  ) {
    index2_1++;
  }

  if (state === "choices2_3" && index2_2 < 24) {
    index2_2++;
  }

  if (state === "choices3_1" && index3_1 < 5) {
    index3_1++;
  }

  if (
    (state === "choices3_2" && index3_2 < 7) ||
    (state === "choices3_3" && index3_2 < 7)
  ) {
    index3_2++;
  }

  if (state === "choices4_1" && index4_1 < 13) {
    index4_1++;
  }

  if (state === "choices4_2" && index4_2 < 15) {
    index4_2++;
  }

  if (state === "choices4_3" && index4_3 < 12) {
    index4_3++;
  }

  if (
    (state === "choices5A1" && index5A1 < 27) ||
    (state === "choices5A2" && index5A1 < 27) ||
    (state === "choices5C1" && index5A1 < 27) ||
    (state === "choices5C2" && index5A1 < 27)
  ) {
    index5A1++;
  }

  if (
    (state === "choices5A3" && index5A2 < 29) ||
    (state === "choices5C3" && index5A2 < 29)
  ) {
    index5A2++;
  }

  if (
    (state === "choices5B1" && index5B1 < 29) ||
    (state === "choices5B3" && index5B1 < 29)
  ) {
    index5B1++;
  }

  if (state === "choices5B2" && index5B2 < 30) {
    index5B2++;
  }
}
