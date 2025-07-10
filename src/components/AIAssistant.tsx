import React from 'react';

const imageUrl = 'https://img01.yzcdn.cn/upload_files/2025/05/21/FgQ3I8848jV_1BFTaMnVlbWitMGB.png?imageMogr2/format/webp';

const AIAssistant: React.FC = () => {
  return (
    <section className="h-full w-full flex items-center justify-center bg-white">
      <img
        src={imageUrl}
        alt="矩阵式AI智能生态"
        className="max-w-full max-h-full object-contain"
      />
    </section>
  );
};

export default AIAssistant; 