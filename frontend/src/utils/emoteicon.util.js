const emojiMap = new Map([
    ["👾", {
        description: "Alien Monster",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien%20Monster.png"
    }],
    ["👽", {
        description: "Alien",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png"
    }],
    ["👿", {
        description: "Angry Face with Horns",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face%20with%20Horns.png"
    }],
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
    ["💣", {
        description: "Bomb",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Bomb.png"
    }],
    ["💔", {
        description: "Broken Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Broken%20Heart.png"
    }],
    ["🥶", {
        description: "Cold Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cold%20Face.png"
    }],
    ["💥", {
        description: "Collision",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Collision.png"
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
    ["👻", {
        description: "Ghost",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png"
    }],
    ["😬", {
        description: "Grimacing Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grimacing%20Face.png"
    }],
    ["🤗", {
        description: "Hugging Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hugging%20Face.png"
    }],
    ["💯", {
        description: "Hundred Points",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hundred%20Points.png"
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
    ["🤙🏻", {
        description: "Call Me Hand Light Skin Tone",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Call%20Me%20Hand%20Light%20Skin%20Tone.png"
    }],
    ["☝️", {
        description: "Backhand Index Pointing Up",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Up.png"
    }],
    ["👈", {
        description: "Backhand Index Pointing Left",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Left.png"
    }],
    ["👇", {
        description: "Backhand Index Pointing Down",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png"
    }],
    ["💪", {
        description: "Flexed Biceps",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Flexed%20Biceps.png"
    }],
    ["🤛", {
        description: "Left-Facing Fist",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Left-Facing%20Fist.png"
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
    ['🐻', {
        description: 'Bear',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png'
    }],
    ['🌸', {
        description: 'Blossom',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Blossom.png'
    }],
    ['🐔', {
        description: 'Chicken',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Chicken.png'
    }],
    ['🦊', {
        description: 'Fox',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Fox.png'
    }],
    ['🐞', {
        description: 'Lady Beetle',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Lady%20Beetle.png'
    }],
    ['🐺', {
        description: 'Wolf',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Wolf.png'
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
    ['💀', {
        description: 'Skull',
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Skull.png'
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
    ["🖤", {
        description: "Black Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Black%20Heart.png"
    }],
    ["💙", {
        description: "Blue Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Blue%20Heart.png"
    }],
    ["🤎", {
        description: "Brown Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Brown%20Heart.png"
    }],
    ["😼", {
        description: "Cat with Wry Smile",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Wry%20Smile.png"
    }],
    ["😹", {
        description: "Cat with Tears of Joy",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Tears%20of%20Joy.png"
    }],
    ["🤡", {
        description: "Clown Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Clown%20Face.png"
    }],
    ["🤠", {
        description: "Cowboy Hat Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cowboy%20Hat%20Face.png"
    }],
    ["😿", {
        description: "Crying Cat",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Crying%20Cat.png"
    }],
    ["🏃‍♂️", {
        description: "Dashing Away",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Dashing%20Away.png"
    }],
    ["🥸", {
        description: "Disguised Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png"
    }],
    ["💫", {
        description: "Dizzy",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Dizzy.png"
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
    ["👁️‍🗨️", {
        description: "Eye in Speech Bubble",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Eye%20in%20Speech%20Bubble.png"
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
    ["🙉", {
        description: "Hear-No-Evil Monkey",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hear-No-Evil%20Monkey.png"
    }],
    ["💟", {
        description: "Heart Decoration",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20Decoration.png"
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
    ["😽", {
        description: "Kissing Cat",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Kissing%20Cat.png"
    }],
    ["💌", {
        description: "Love Letter",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png"
    }],
    ["❤️‍🩹", {
        description: "Mending Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Mending%20Heart.png"
    }],
    ["💓", {
        description: "Pink Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pink%20Heart.png"
    }],
    ["💜", {
        description: "Purple Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Purple%20Heart.png"
    }],
    ["🙈", {
        description: "See-No-Evil Monkey",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/See-No-Evil%20Monkey.png"
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
    ["💛", {
        description: "Yellow Heart",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Yellow%20Heart.png"
    }],
    ["🥇", {
        description: "1st Place Medal",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/1st%20Place%20Medal.png"
    }],
    ["🥈", {
        description: "2nd Place Medal",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/2nd%20Place%20Medal.png"
    }],
    ["🥉", {
        description: "3rd Place Medal",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/3rd%20Place%20Medal.png"
    }],
    ["🎟️", {
        description: "Admission Tickets",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Admission%20Tickets.png"
    }],
    ["🏀", {
        description: "Basketball",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Basketball.png"
    }],
    ["⚾", {
        description: "Baseball",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Baseball.png"
    }],
    ["🏸", {
        description: "Badminton",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Badminton.png"
    }],
    ["🎈", {
        description: "Balloon",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Balloon.png"
    }],
    ["🥊", {
        description: "Boxing Glove",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Boxing%20Glove.png"
    }],
    ["🎊", {
        description: "Confetti Ball",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Confetti%20Ball.png"
    }],
    ["🏏", {
        description: "Cricket Game",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Cricket%20Game.png"
    }],
    ["🤿", {
        description: "Diving Mask",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Diving%20Mask.png"
    }],
    ["🎆", {
        description: "Fireworks",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Fireworks.png"
    }],
    ["🧨", {
        description: "Firecracker",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Firecracker.png"
    }],
    ["♥️", {
        description: "Heart Suit",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png"
    }],
    ["🎃", {
        description: "Jack-O-Lantern",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Jack-O-Lantern.png"
    }],
    ["🎖️", {
        description: "Military Medal",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Military%20Medal.png"
    }],
    ["🎉", {
        description: "Party Popper",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png"
    }],
    ["🎇", {
        description: "Sparkler",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Sparkler.png"
    }],
    ["✨", {
        description: "Sparkles",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Sparkles.png"
    }],
    ["🎁", {
        description: "Wrapped Gift",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Wrapped%20Gift.png"
    }],
    ["⏰", {
        description: "Alarm Clock",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png"
    }],
    ["⛈️", {
        description: "Cloud with Lightning and Rain",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Lightning%20and%20Rain.png"
    }],
    ["🌧️", {
        description: "Cloud with Rain",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Rain.png"
    }],
    ["🌨️", {
        description: "Cloud with Snow",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Snow.png"
    }],
    ["☁️", {
        description: "Cloud",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud.png"
    }],
    ["🌙", {
        description: "Crescent Moon",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Crescent%20Moon.png"
    }],
    ["☄️", {
        description: "Comet",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Comet.png"
    }],
    ["🧭", {
        description: "Compass",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Compass.png"
    }],
    ["🚧", {
        description: "Construction",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Construction.png"
    }],
    ["🔥", {
        description: "Fire",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png"
    }],
    ["🌝", {
        description: "Full Moon Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Full%20Moon%20Face.png"
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
    ["☃️", {
        description: "Snowman",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Snowman.png"
    }],
    ["⛇", {
        description: "Snowman Without Snow",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Snowman%20Without%20Snow.png"
    }],
    ["🌞", {
        description: "Sun with Face",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun%20with%20Face.png"
    }],
    ["🪵", {
        description: "Wood",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Wood.png"
    }],
    ["👙", {
        description: "Bikini",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bikini.png"
    }],
    ["🩱", {
        description: "One-Piece Swimsuit",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/One-Piece%20Swimsuit.png"
    }],
    ["🪗", {
        description: "Accordion",
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Accordion.png"
    }]
]);


function getEmoteIcon(emote) {
    return emojiMap.get(emote);
}

export default getEmoteIcon;