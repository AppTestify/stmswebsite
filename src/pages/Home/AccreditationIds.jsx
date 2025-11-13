const AccreditationIds = () => {
  const accreditationIds = [
    {
      id: 1,
      label: "NAAC TRACK ID",
      value: "ORCGN11104"
    },
    {
      id: 2,
      label: "AISHE ID",
      value: "C-21069"
    },
    {
      id: 3,
      label: "AICTE PERMANENT INSTITUTE ID",
      value: "1-2509627334"
    }
  ]

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {accreditationIds.map((item) => (
            <div
              key={item.id}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-blue-900 mb-1">
                {item.label}:
              </div>
              <div className="text-base font-bold text-blue-700">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccreditationIds

