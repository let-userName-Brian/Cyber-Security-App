const data = [ 
    {
        "id": 1,
        "title": "Keep Your Software Up to Date",
        "description": "As we saw from the stats above, ransomware attacks were a major attack vector of 2017 for both businesses and consumers. One of the most important cyber security tips to mitigate ransomware is patching outdated software, both operating system, and applications. This helps remove critical vulnerabilities that hackers use to access your devices. Here are a few quick tips to get you started:",
        "Ul":[
            "Turn on automatic system updates for your device.", 
            "Make sure your desktop web browser uses automatic security updates.",
            "Keep your web browser plugins like Flash, Java, etc. updated."
            ]
    },
    {
        "id": 2,
        "title":  "Use Anti-Virus Protection & Firewall",
        "description": "Anti-virus (AV) protection software has been the most prevalent solution to fight malicious attacks. AV software blocks malware and other malicious viruses from entering your device and compromising your data. Use anti-virus software from trusted vendors and only run one AV tool on your device. Using a firewall is also important when defending your data against malicious attacks. A firewall helps screen out hackers, viruses, and other malicious activity that occurs over the Internet and determines what traffic is allowed to enter your device. Windows and Mac OS X comes with their respective firewalls, aptly named Windows Firewall and Mac Firewall. Your router should also have a firewall built in to prevent attacks on your network."
    },
    {
        "id": 3,
        "title": "Use Strong Passwords & Use a Password Management Tool",
        "description": "You’ve probably heard that strong passwords are critical to online security. The truth is passwords are important in keeping hackers out of your data! According to the National Institute of Standards and Technology’s (NIST) 2017 new password policy framework, you should consider:",
        "Ul": [
            "Dropping the crazy, complex mixture of upper case letters, symbols, and numbers. Instead, opt for something more user-friendly but with at least eight characters and a maximum length of 64 characters.",
            "The password should contain at least one lowercase letter, one uppercase letter, one number, and four symbols but not the following &%#@.",
            "Choose something that is easy to remember and never leave a password hint out in the open or make it publicly available for hackers to see",
            "Reset your password when you forget it. But, change it once per year as a general refresh. If you want to make it easier to manage your passwords, try using a password management tool or password account vault."
            ]   
    },
    {
        "id": 4,
        "title": "Use Two-Factor or Multi-Factor Authentication",
        "description": "Two-factor or multi-factor authentication is a service that adds additional layers of security to the standard password method of online identification. Without two-factor authentication, you would normally enter a username and password. But, with two-factor, you would be prompted to enter one additional authentication method such as a Personal Identification Code, another password or even fingerprint. With multi-factor authentication, you would be prompted to enter more than two additional authentication methods after entering your username and password. According to NIST, an SMS delivery should not be used during two-factor authentication because malware can be used to attack mobile phone networks and can compromise data during the process. "
    },
    {
        "id": 5,
        "title": "Learn about Phishing Scams – be very suspicious of emails, phone calls, and flyers",
        "description": "We recently blogged that phishing scams are nastier than ever this year. In a phishing scheme attempt, the attacker poses as someone or something the sender is not to trick the recipient into divulging credentials, clicking a malicious link, or opening an attachment that infects the user’s system with malware, trojan, or zero-day vulnerability exploit. This often leads to a ransomware attack. In fact, 90% of ransomware attacks originate from phishing attempts. A few important cyber security tips to remember about phishing schemes include:",
        "Ul": [
            "Bottom line – Don’t open email from people you don’t know",
            "Know which links are safe and which are not – hover over a link to discover where it directs to",
            "Be suspicious of the emails sent to you in general – look and see where it came from and if there are grammatical errors",
            "Malicious links can come from friends who have been infected too. So, be extra careful!"
            ]   
    },
    {
        "id": 6,
        "title": "Protect Your Sensitive Personal Identifiable Information (PII)",
        "description": "Personal Identifiable Information (PII) is any information that can be used by a cybercriminal to identify or locate an individual. PII includes information such as name, address, phone numbers, data of birth, Social Security Number, IP address, location details, or any other physical or digital identity data. Your credit card information should be protected by companies if they follow the PCI DSS standards. In the new “always-on” world of social media, you should be very cautious about the information you include online. It is recommended that you only show the very minimum about yourself on social media. Consider reviewing your privacy settings across all your social media accounts, particularly Facebook. Adding your home address, birthdate, or any other PII information will dramatically increase your risk of a security breach. Hackers use this information to their advantage!"
    },
    {
        "id": 7,
        "title": "Use Your Mobile Devices Securely",
        "description": "According to McAfee Labs, your mobile device is now a target to more than 1.5 million new incidents of mobile malware. Here are some quick tips for mobile device security:",
        "Ul": [
            "Create a Difficult Mobile Passcode – Not Your Birthdate or Bank PIN",
            "Install Apps from Trusted Sources",
            "Keep Your Device Updated – Hackers Use Vulnerabilities in Unpatched Older Operating Systems",
            "Avoid sending PII or sensitive information over text message or email",
            "Leverage Find my iPhone or the Android Device Manager to prevent loss or theft",
            "Perform regular mobile backups using iCloud or Enabling Backup & Sync from Android"
        ] 
    },
    {
        "id": 8,
        "title": "Backup Your Data Regularly",
        "description": "Backing up your data regularly is an overlooked step in personal online security. The top IT and security managers follow a simple rule called the 3-2-1 backup rule. Essentially, you will keep three copies of your data on two different types of media (local and external hard drive) and one copy in an off-site location (cloud storage). If you become a victim of ransomware or malware, the only way to restore your data is to erase your systems and restore with a recently performed backup."
    },
    {
        "id": 9,
        "title": "Don’t Use Public Wi-Fi",
        "description": "Don’t use a public Wi-Fi without using a Virtual Private Network (VPN). By using VPN software, the traffic between your device and the VPN server is encrypted. This means it’s much more difficult for a cybercriminal to obtain access to your data on your device. Use your cell network if you don’t have a VPN when security is important."
    },
    {
        "id": 10,
        "title": "Review Your Online Accounts & Credit Reports Regularly for Changes",
        "description": "With the recent Equifax breach, it’s more important than ever for consumers to safeguard their online accounts and monitor their credit reports. A credit freeze is the most effective way for you to protect your personal credit information from cyber criminals right now. Essentially, it allows you to lock your credit and use a personal identification number (PIN) that only you will know. You can then use this PIN when you need to apply for credit."
    }
]


//esxport the data
export default data;
