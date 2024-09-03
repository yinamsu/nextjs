export const metadata = {
    description: 'Homepage of GFEX',
}

export default function AboutUsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {children}
        &copy; Next JS is great!
      </div>
    );
  }