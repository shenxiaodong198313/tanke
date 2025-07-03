import React from 'react';

const groups = [
  {
    num: '01',
    title: '居家宝妈',
    desc: '想赚钱补贴家用，但又不想耽误孩子。',
  },
  {
    num: '02',
    title: '毕业大学生',
    desc: '毕业就迷茫，没有规划，想要挑战自己。',
  },
  {
    num: '03',
    title: '创业人员',
    desc: '渴望高收入，一直寻求好的创业机会。',
  },
  {
    num: '04',
    title: '自由职业',
    desc: '可以从事自己感兴趣的领域，从而找到乐趣。',
  },
  {
    num: '05',
    title: '短视频从业者',
    desc: '打工辛苦，赚钱不多，想利用自身行业优势创业。',
  },
  {
    num: '06',
    title: '线下实体店',
    desc: '市场饱和，转型视频带货出路。',
  },
];

const SuitableGroups: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 my-6">
      {groups.map((g) => (
        <div
          key={g.num}
          className="bg-pink-50 rounded-xl shadow-sm px-4 py-3 md:px-6 md:py-4 flex flex-col items-start min-w-[140px] max-w-[180px]"
          style={{ minHeight: 110 }}
        >
          <div className="flex items-center mb-1">
            <span className="bg-pink-400 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2">
              {g.num}
            </span>
            <span className="text-base md:text-lg font-bold text-blue-900">{g.title}</span>
          </div>
          <div className="text-xs md:text-sm text-gray-700 mt-1 leading-snug">{g.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default SuitableGroups; 