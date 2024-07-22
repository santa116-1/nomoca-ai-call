import React from 'react';

const DetailsTable = () => {
  const data = [
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
    { datetime: '6月1日 12:00', content: 'クリニックに忘れ物をしたのですが、確認できますか？' },
    { datetime: '6月1日 14:35', content: '駐車場があるかどうかを教えて下さい。' },
  ];

  return (
    <div className="bg-[#F8F8FB] w-full rounded-lg p-5 border-[1px] ">
      <p className="text-[24px] font-semibold">用件（詳細）</p>
      <div className='p-5'>
        <table className=" bg-white w-full border-collapse border  max-h-[430px] overflow-auto">
          <thead>
            <tr className="bg-[#E1EBFB]">
              <th className="border px-4 py-2 text-left">受電日時</th>
              <th className="border px-4 py-2 text-left">書き起こし内容</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.datetime}</td>
                <td className="border px-4 py-2">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsTable;
