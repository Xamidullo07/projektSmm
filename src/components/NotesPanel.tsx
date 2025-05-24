const NotesPanel = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-2">Eslatmalar</h2>
      <textarea
        placeholder="Eslatmalar yozib boring..."
        className="w-full h-96 p-2 bg-gray-700 text-white resize-none rounded"
      />
    </div>
  );
};

export default NotesPanel;
