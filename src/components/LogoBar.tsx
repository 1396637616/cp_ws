import Image from 'next/image';

export default function LogoBar() {
  return (
    <div>
      <Image src="/images/canpan.gif" alt="Wren AI" width={32} height={32} />
      <span
        style={{
          fontSize: '20px',
          color: '#ffffff',
          fontFamily: 'fantasy',
          verticalAlign: 'middle',
          letterSpacing: '2px',
          marginLeft: '2px',
        }}
      >
        参盘问数
      </span>
    </div>
  );
}
