const contacts = [
    { name: 'Toshak Bhat', email: 'bhatsaab04@gmail.com' },
    { name: 'Vineet Sharma', email: 'vineetsharmavs1736112@gmail.com' },
    { name: 'Vanshika Pandey', email: 'Vanshikapandey1711@gmail.com' },
    { name: 'Saurabh Anand', email: 'saurabhbebi@gmail.com' },
  ];
function SupportPage() {

  return (
    <div className='flex justify-center w-full mt-8'>
      <div className="flex-col items-center mt-4">
      <p>If you need assistance, please reach out to one of our technical staffs:</p>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  )
}

export default SupportPage