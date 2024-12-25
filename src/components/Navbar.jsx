import { Bell, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-white px-4 shadow flex items-center justify-end p-1 pr-10 gap-4 sm:gap-5">
      <Bell className="text-gray-600" size={20} />
      <img
        src="https://s3-alpha-sig.figma.com/img/ecaa/dbab/5358b1c4de8696613bd0b067440bec38?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nAbJh1UBfmLMQvJ~Mnffk9XY6rQzVWramLbc-yeOyKeX-8zwee1wInrRZsDaaMIxJ7niWtPgkftkKS-WsY0aVdQFVowt-JTV~OtaR7DcM0D~bwmWALIBKbg~M4Xll1MaA5IKmvWxGyla8zOYXUPnOHPJ4U~ifyrDSNsUSORvDscFLofTUcb81Xe3eAlwckTW91-4rgKVtR4GWA6Uaa3loN8IsMSYoE6LyMm48Ppm1suMALKq-RBdoMp62XlnxWVMxk-63ZDguLTulALuM8VspgKH0PsHAAgc2HEM95Hen-2eBDJ0cy9DkFNAfdW7QPW4qBUaD1~xFJXK2adtoZmtdw__"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-gray-800 font-medium text-xs sm:text-sm">Lorem Ipa</span>
        <p className="text-gray-500 text-xs sm:text-sm">Manager</p>
      </div>
      <ChevronDown />
    </div>
  );
};

export default Navbar;

