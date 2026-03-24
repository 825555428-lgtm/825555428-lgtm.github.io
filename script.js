// 12支财运签文数据
const fortunes = [
    {
        name: "第一签 - 大吉",
        level: "🌟 大吉",
        content: "财运亨通，贵人相助。今日宜积极进取，把握投资良机，必有丰硕回报。财运从天降，惊喜连连。"
    },
    {
        name: "第二签 - 上上签",
        level: "💰 财运大旺",
        content: "财运滚滚而来，正财偏财双丰收。今日适合签约、购物、理财，每一笔交易都带来好运。"
    },
    {
        name: "第三签 - 上签",
        level: "✨ 顺遂之财",
        content: "财运平稳上升，工作顺利带来额外收益。今日宜保持专注，你的努力即将转化为实实在在的财富。"
    },
    {
        name: "第四签 - 上吉签",
        level: "🎯 财路通达",
        content: "财路宽广，机遇不断。今日适合拓展人脉，新的合作机会正在向你招手，财运自然水到渠成。"
    },
    {
        name: "第五签 - 中上签",
        level: "🔥 财气渐盛",
        content: "财运逐渐升温，今日虽然不会暴富，但稳步积累的财富同样珍贵。保持耐心，厚积薄发。"
    },
    {
        name: "第六签 - 中签",
        level: "📈 财运平稳",
        content: "财运平稳，收入与支出相抵。今日适合做财务规划，为未来积累资本，稳中求进是最佳策略。"
    },
    {
        name: "第七签 - 中平签",
        level: "⚖️ 财运持平",
        content: "财运不增不减，今日适合保持现状，不宜冒险投资。等待时机，下次摇签可能会有更好运势。"
    },
    {
        name: "第八签 - 小吉签",
        level: "🌈 小有财运",
        content: "财运虽不大，但总比没有好。今日适合小额理财或购买彩票，或许能有意想不到的小惊喜。"
    },
    {
        name: "第九签 - 小签",
        level: "💎 潜力之财",
        content: "财运潜藏，需要你主动出击。今日适合学习理财知识或寻找新机会，现在的投入是未来财富的种子。"
    },
    {
        name: "第十签 - 末吉签",
        level: "🍀 财运转机",
        content: "财运有转机，但需要时间。今日不宜急于求成，稳扎稳打，财运会在不经意间降临。"
    },
    {
        name: "第十一签 - 谨慎签",
        level: "⚠️ 谨慎理财",
        content: "财运波动，今日需要特别谨慎。不宜大额消费或投资，守财即是财，理性对待每一次财务决策。"
    },
    {
        name: "第十二签 - 守成签",
        level: "🔒 守财为上",
        content: "财运暂缓，今日宜守不宜攻。专注本职工作，稳住现有资产，等待运势好转再行动。"
    }
];

// 获取元素
const shakeBtn = document.getElementById('shakeBtn');
const shakeBox = document.getElementById('shakeBox');
const resultContainer = document.getElementById('resultContainer');
const resultTitle = document.getElementById('resultTitle');
const resultContent = document.getElementById('resultContent');
const resetBtn = document.getElementById('resetBtn');

// 摇签功能
shakeBtn.addEventListener('click', () => {
    // 禁用按钮
    shakeBtn.disabled = true;
    shakeBtn.textContent = '摇签中...';

    // 开始摇晃动画
    shakeBox.classList.add('shaking');

    // 摇晃4-5秒后出签
    setTimeout(() => {
        // 停止摇晃
        shakeBox.classList.remove('shaking');

        // 随机抽取一支签
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const fortune = fortunes[randomIndex];

        // 显示结果
        resultTitle.textContent = fortune.level;
        resultContent.textContent = fortune.content;

        // 隐藏按钮，显示结果容器
        shakeBtn.style.display = 'none';
        resultContainer.style.display = 'block';

    }, 4500); // 4.5秒
});

// 再来一次功能
resetBtn.addEventListener('click', () => {
    // 重置界面
    shakeBtn.disabled = false;
    shakeBtn.textContent = '摇签求财';
    shakeBtn.style.display = 'inline-block';

    resultContainer.style.display = 'none';

    // 重置表情
    shakeBox.querySelector('.shake-text').textContent = '🔮';
});
