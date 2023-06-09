interface ModalProps {
  children: React.ReactNode;
  title: string;
}

function Modal({ children, title }: ModalProps) {
  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 botto-0" />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left=1/2 -translate-x-1/2">
        <h1 className="text-2xl text-center mb-2">{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Modal;
