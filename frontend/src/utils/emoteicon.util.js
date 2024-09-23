const emojiMap = new Map([
    ["😧", {
        description: "Anguished Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Anguished%20Face.png"
    }],
    ["😨", {
        description: "Anxious Face with Sweat",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Anxious%20Face%20with%20Sweat.png"
    }],
    ["😲", {
        description: "Astonished Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png"
    }],
    ["😁", {
        description: "Beaming Face with Smiling Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
    }],
    ["💓", {
        description: "Beating Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png"
    }],
    ["🫦", {
        description: "Biting Lip",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Biting%20Lip.png"
    }],
    ["💔", {
        description: "Broken Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Broken%20Heart.png"
    }],
    ["🥶", {
        description: "Cold Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cold%20Face.png"
    }],
    ["😖", {
        description: "Confounded Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confounded%20Face.png"
    }],
    ["😕", {
        description: "Confused Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confused%20Face.png"
    }],
    ["😢", {
        description: "Crying Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Crying%20Face.png"
    }],
    ["😵", {
        description: "Dizzy Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Dizzy%20Face.png"
    }],
    ["😞", {
        description: "Downcast Face with Sweat",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Downcast%20Face%20with%20Sweat.png"
    }],
    ["🤤", {
        description: "Drooling Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Drooling%20Face.png"
    }],
    ["😡", {
        description: "Enraged Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Enraged%20Face.png"
    }],
    ["😑", {
        description: "Expressionless Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Expressionless%20Face.png"
    }],
    ["😮‍💨", {
        description: "Face Exhaling",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Exhaling.png"
    }],
    ["😋", {
        description: "Face Savoring Food",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Savoring%20Food.png"
    }],
    ["😱", {
        description: "Face Screaming in Fear",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Screaming%20in%20Fear.png"
    }],
    ["🤮", {
        description: "Face Vomiting",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Vomiting.png"
    }],
    ["🤭", {
        description: "Face with Hand Over Mouth",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Hand%20Over%20Mouth.png"
    }],
    ["😂", {
        description: "Face with Tears of Joy",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20TearsOf Joy.png"
    }],
    ["😛", {
        description: "Face with Tongue",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Tongue.png"
    }],
    ["😨", {
        description: "Fearful Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Fearful%20Face.png"
    }],
    ["😬", {
        description: "Grimacing Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grimacing%20Face.png"
    }],
    ["🤗", {
        description: "Hugging Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hugging%20Face.png"
    }],
    ["💋", {
        description: "Kiss Mark",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Kiss%20Mark.png"
    }],
    ["😯", {
        description: "Hushed Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hushed%20Face.png"
    }],
    ["😭", {
        description: "Loudly Crying Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Loudly%20Crying%20Face.png"
    }],
    ["💩", {
        description: "Pile of Poo",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pile%20of%20Poo.png"
    }],
    ["🥳", {
        description: "Partying Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Partying%20Face.png"
    }],
    ["🤣", {
        description: "Rolling on the Floor Laughing",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Rolling%20on%20the%20Floor%20Laughing.png"
    }],
    ["🤫", {
        description: "Shushing Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Shushing%20Face.png"
    }],
    ["😴", {
        description: "Sleeping Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sleeping%20Face.png"
    }],
    ["🤐", {
        description: "Zipper-Mouth Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Zipper-Mouth%20Face.png"
    }],
    ["😉", {
        description: "Winking Face with Tongue",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Winking%20Face%20with%20Tongue.png"
    }],
    ["😇", {
        description: "Smiling Face with Halo",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Halo.png"
    }],
    ["😍", {
        description: "Smiling Face with Heart-Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Heart-Eyes.png"
    }],
    ["🥰", {
        description: "Smiling Face with Hearts",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Hearts.png"
    }],
    ["😎", {
        description: "Smiling Face with Sunglasses",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png"
    }],
    ["🤩", {
        description: "Star-Struck",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png"
    }],
    ["🙃", {
        description: "Upside-Down Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Upside-Down%20Face.png"
    }],
    ["🤞", {
        description: "Crossed Fingers",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Crossed%20Fingers.png"
    }],
    ["👊", {
        description: "Oncoming Fist",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Oncoming%20Fist.png"
    }],
    ["👐", {
        description: "Open Hands",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Open%20Hands.png"
    }],
    ["🫶", {
        description: "Heart Hands",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Heart%20Hands.png"
    }],
    ["👎", {
        description: "Thumbs Down",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Down.png"
    }],
    ["👍", {
        description: "Thumbs Up",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Up.png"
    }],
    ["👌", {
        description: "OK Hand",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/OK%20Hand.png"
    }],
    ["✌️", {
        description: "Victory Hand",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Victory%20Hand.png"
    }],
    ["👋", {
        description: "Waving Hand",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
    }],
    ['🤬', {
        description: 'Face with Symbols on Mouth',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Symbols%20on%20Mouth.png'
    }],
    ['🤒', {
        description: 'Face with Thermometer',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Thermometer.png'
    }],
    ['💘', {
        description: 'Heart with Arrow',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20with%20Arrow.png'
    }],
    ['🥵', {
        description: 'Hot Face',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png'
    }],
    ['🤑', {
        description: 'Money-Mouth Face',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Money-Mouth%20Face.png'
    }],
    ['🤧', {
        description: 'Sneezing Face',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sneezing%20Face.png'
    }],
    ['🤪', {
        description: 'Zany Face',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Zany%20Face.png'
    }],
    ['🥱', {
        description: 'Yawning Face',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Yawning%20Face.png'
    }],
    ["😃", {
        description: "Grinning Face with Big Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Big%20Eyes.png"
    }],
    ["😄", {
        description: "Grinning Face with Smiling Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Smiling%20Eyes.png"
    }],
    ["😅", {
        description: "Grinning Face with Sweat",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Sweat.png"
    }],
    ["😀", {
        description: "Grinning Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face.png"
    }],
    ["😆", {
        description: "Grinning Squinting Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Squinting%20Face.png"
    }],
    ["😚", {
        description: "Kissing Face with Closed Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Kissing%20Face%20with%20Closed%20Eyes.png"
    }],
    ["😇", {
        description: "Saluting Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Saluting%20Face.png"
    }],
    ["🙂", {
        description: "Smiling Face with Smiling Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Smiling%20Eyes.png"
    }],
    ["😊", {
        description: "Smiling Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face.png"
    }],
    ["😟", {
        description: "Worried Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Worried%20Face.png"
    }],
    ["🤠", {
        description: "Cowboy Hat Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cowboy%20Hat%20Face.png"
    }],
    ["🥸", {
        description: "Disguised Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png"
    }],
    ["🫥", {
        description: "Dotted Line Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Dotted%20Line%20Face.png"
    }],
    ["😰", {
        description: "Anxious Face with Sweat",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Anxious%20Face%20with%20Sweat.png"
    }],
    ["🤯", {
        description: "Exploding Head",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png"
    }],
    ["😑", {
        description: "Expressionless Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Expressionless%20Face.png"
    }],
    ["😚", {
        description: "Face Blowing a Kiss",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Blowing%20a%20Kiss.png"
    }],
    ["😮‍💨", {
        description: "Face Exhaling",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Exhaling.png"
    }],
    ["🥹", {
        description: "Face Holding Back Tears",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png"
    }],
    ["😋", {
        description: "Face Savoring Food",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Savoring%20Food.png"
    }],
    ["😶", {
        description: "Face Without Mouth",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Without%20Mouth.png"
    }],
    ["😶‍🌫️", {
        description: "Face in Clouds",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20in%20Clouds.png"
    }],
    ["😵", {
        description: "Face with Crossed-Out Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Crossed-Out%20Eyes.png"
    }],
    ["🫤", {
        description: "Face with Diagonal Mouth",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Diagonal%20Mouth.png"
    }],
    ["🤕", {
        description: "Face with Head-Bandage",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Head-Bandage.png"
    }],
    ["🧐", {
        description: "Face with Monocle",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
    }],
    ["🫢", {
        description: "Face with Open Eyes and Hand Over Mouth",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Open%20Eyes%20and%20Hand%20Over%20Mouth.png"
    }],
    ["😮", {
        description: "Face with Open Mouth",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Open%20Mouth.png"
    }],
    ["🫨", {
        description: "Face with Peeking Eye",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Peeking%20Eye.png"
    }],
    ["🙄", {
        description: "Face with Rolling Eyes",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Rolling%20Eyes.png"
    }],
    ["💗", {
        description: "Growing Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Growing%20Heart.png"
    }],
    ["❣️", {
        description: "Heart Exclamation",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20Exclamation.png"
    }],
    ["❤️‍🔥", {
        description: "Heart on Fire",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png"
    }],
    ["💝", {
        description: "Heart with Ribbon",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20with%20Ribbon.png"
    }],
    ["🥵", {
        description: "Hot Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png"
    }],
    ["❤️‍🩹", {
        description: "Mending Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Mending%20Heart.png"
    }],
    ["💓", {
        description: "Pink Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pink%20Heart.png"
    }],
    ["😈", {
        description: "Smiling Face with Horns",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Horns.png"
    }],
    ["💖", {
        description: "Sparkling Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sparkling%20Heart.png"
    }],
    ["💞", {
        description: "Two Hearts",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Two%20Hearts.png"
    }],
    ["🙃", {
        description: "Upside-Down Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Upside-Down%20Face.png"
    }],
    ["🎊", {
        description: "Confetti Ball",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Confetti%20Ball.png"
    }],
    ["♥️", {
        description: "Heart Suit",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png"
    }],
    ["🎉", {
        description: "Party Popper",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png"
    }],
    ["✨", {
        description: "Sparkles",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Sparkles.png"
    }],
    ["🔥", {
        description: "Fire",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png"
    }],
    ["🌟", {
        description: "Glowing Star",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png"
    }],
    ["❄️", {
        description: "Snowflake",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Snowflake.png"
    }],
    ["⭐", {
        description: "Star",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png"
    }],
    ["💦", {
        description: "Sweat Droplets",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sweat%20Droplets.png"
    }]
]);

function getEmoteIcon(emote) {
    return emojiMap.get(emote);
}

export default getEmoteIcon;