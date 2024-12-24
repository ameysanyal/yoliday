import { Bell, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-white shadow flex justify-end items-center p-1 pr-10 space-x-5">
      <Bell className="text-gray-600" />
      <img
        src="https://s3-alpha-sig.figma.com/img/ecaa/dbab/5358b1c4de8696613bd0b067440bec38?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nAbJh1UBfmLMQvJ~Mnffk9XY6rQzVWramLbc-yeOyKeX-8zwee1wInrRZsDaaMIxJ7niWtPgkftkKS-WsY0aVdQFVowt-JTV~OtaR7DcM0D~bwmWALIBKbg~M4Xll1MaA5IKmvWxGyla8zOYXUPnOHPJ4U~ifyrDSNsUSORvDscFLofTUcb81Xe3eAlwckTW91-4rgKVtR4GWA6Uaa3loN8IsMSYoE6LyMm48Ppm1suMALKq-RBdoMp62XlnxWVMxk-63ZDguLTulALuM8VspgKH0PsHAAgc2HEM95Hen-2eBDJ0cy9DkFNAfdW7QPW4qBUaD1~xFJXK2adtoZmtdw__"
        className="w-10 h-10 rounded-full mx-auto"
      />
      <div className="ml-4">
        <span className="text-gray-800 font-medium">Lorem Ipa</span>
        <p className="text-gray-500 text-sm">Manager</p>
      </div>
      <ChevronDown />
    </div>
  );
};

export default Navbar;
