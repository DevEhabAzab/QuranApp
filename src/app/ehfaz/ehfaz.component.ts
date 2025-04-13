import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Sheikh {
  text: string;
  value: string;
}

interface Sura {
  number: number;
  name: string;
}

@Component({
  selector: 'app-ehfaz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ehfaz.component.html',
  styleUrls: ['./ehfaz.component.css']
})
export class EhfazComponent implements OnInit, AfterViewInit, OnDestroy {
  sheikhs: Sheikh[] = [
    { text: "Abdul Basit Abdul Samad (64kbps)", value: "AbdulSamad_64kbps_QuranExplorer.Com" },
    { text: "Abdul Basit Mujawwad (128kbps)", value: "Abdul_Basit_Mujawwad_128kbps" },
    { text: "Abdul Basit Murattal (192kbps)", value: "Abdul_Basit_Murattal_192kbps" },
    { text: "Abdul Basit Murattal (64kbps)", value: "Abdul_Basit_Murattal_64kbps" },
    { text: "Abdullaah Awaad Al-Juhaynee (128kbps)", value: "Abdullaah_3awwaad_Al-Juhaynee_128kbps" },
    { text: "Abdullah Basfar (192kbps)", value: "Abdullah_Basfar_192kbps" },
    { text: "Abdullah Basfar (32kbps)", value: "Abdullah_Basfar_32kbps" },
    { text: "Abdullah Basfar (64kbps)", value: "Abdullah_Basfar_64kbps" },
    { text: "Abdullah Matroud (128kbps)", value: "Abdullah_Matroud_128kbps" },
    { text: "Abdurrahmaan As-Sudais (192kbps)", value: "Abdurrahmaan_As-Sudais_192kbps" },
    { text: "Abdurrahmaan As-Sudais (64kbps)", value: "Abdurrahmaan_As-Sudais_64kbps" },
    { text: "Abu Bakr Ash-Shaatree (128kbps)", value: "Abu_Bakr_Ash-Shaatree_128kbps" },
    { text: "Abu Bakr Ash-Shaatree (64kbps)", value: "Abu_Bakr_Ash-Shaatree_64kbps" },
    { text: "Ahmed Neana (128kbps)", value: "Ahmed_Neana_128kbps" },
    { text: "Ahmed Ibn Ali Al-Ajamy (128kbps)", value: "Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net" },
    { text: "Ahmed Ibn Ali Al-Ajamy (64kbps)", value: "Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com" },
    { text: "Akram AlAlaqimy (128kbps)", value: "Akram_AlAlaqimy_128kbps" },
    { text: "Alafasy (128kbps)", value: "Alafasy_128kbps" },
    { text: "Alafasy (64kbps)", value: "Alafasy_64kbps" },
    { text: "Ali Hajjaj AlSuesy (128kbps)", value: "Ali_Hajjaj_AlSuesy_128kbps" },
    { text: "Ali Jaber (64kbps)", value: "Ali_Jaber_64kbps" },
    { text: "Ayman Sowaid (64kbps)", value: "Ayman_Sowaid_64kbps" },
    { text: "Sahih Ibrahim (192kbps)", value: "English/Sahih_Intnl_Ibrahim_Walk_192kbps" },
    { text: "Fares Abbad (64kbps)", value: "Fares_Abbad_64kbps" },
    { text: "Ghamadi (40kbps)", value: "Ghamadi_40kbps" },
    { text: "Hani Rifai (192kbps)", value: "Hani_Rifai_192kbps" },
    { text: "Hani Rifai (64kbps)", value: "Hani_Rifai_64kbps" },
    { text: "Hudhaify (128kbps)", value: "Hudhaify_128kbps" },
    { text: "Hudhaify (32kbps)", value: "Hudhaify_32kbps" },
    { text: "Hudhaify (64kbps)", value: "Hudhaify_64kbps" },
    { text: "Al Husary (128kbps)", value: "Husary_128kbps" }
  ];

  surahs: Sura[] = [
    { number: 1, name: 'الفاتحة' },
    { number: 2, name: 'البقرة' },
    { number: 3, name: 'آل عمران' },
    { number: 4, name: 'النساء' },
    { number: 5, name: 'المائدة' },
    { number: 6, name: 'الأنعام' },
    { number: 7, name: 'الأعراف' },
    { number: 8, name: 'الأنفال' },
    { number: 9, name: 'التوبة' },
    { number: 10, name: 'يونس' },
    { number: 11, name: 'هود' },
    { number: 12, name: 'يوسف' },
    { number: 13, name: 'الرعد' },
    { number: 14, name: 'إبراهيم' },
    { number: 15, name: 'الحجر' },
    { number: 16, name: 'النحل' },
    { number: 17, name: 'الإسراء' },
    { number: 18, name: 'الكهف' },
    { number: 19, name: 'مريم' },
    { number: 20, name: 'طه' },
    { number: 21, name: 'الأنبياء' },
    { number: 22, name: 'الحج' },
    { number: 23, name: 'المؤمنون' },
    { number: 24, name: 'النور' },
    { number: 25, name: 'الفرقان' },
    { number: 26, name: 'الشعراء' },
    { number: 27, name: 'النمل' },
    { number: 28, name: 'القصص' },
    { number: 29, name: 'العنكبوت' },
    { number: 30, name: 'الروم' },
    { number: 31, name: 'لقمان' },
    { number: 32, name: 'السجدة' },
    { number: 33, name: 'الأحزاب' },
    { number: 34, name: 'سبأ' },
    { number: 35, name: 'فاطر' },
    { number: 36, name: 'يس' },
    { number: 37, name: 'الصافات' },
    { number: 38, name: 'ص' },
    { number: 39, name: 'الزمر' },
    { number: 40, name: 'غافر' },
    { number: 41, name: 'فصلت' },
    { number: 42, name: 'الشورى' },
    { number: 43, name: 'الزخرف' },
    { number: 44, name: 'الدخان' },
    { number: 45, name: 'الجاثية' },
    { number: 46, name: 'الأحقاف' },
    { number: 47, name: 'محمد' },
    { number: 48, name: 'الفتح' },
    { number: 49, name: 'الحجرات' },
    { number: 50, name: 'ق' },
    { number: 51, name: 'الذاريات' },
    { number: 52, name: 'الطور' },
    { number: 53, name: 'النجم' },
    { number: 54, name: 'القمر' },
    { number: 55, name: 'الرحمن' },
    { number: 56, name: 'الواقعة' },
    { number: 57, name: 'الحديد' },
    { number: 58, name: 'المجادلة' },
    { number: 59, name: 'الحشر' },
    { number: 60, name: 'الممتحنة' },
    { number: 61, name: 'الصف' },
    { number: 62, name: 'الجمعة' },
    { number: 63, name: 'المنافقون' },
    { number: 64, name: 'التغابن' },
    { number: 65, name: 'الطلاق' },
    { number: 66, name: 'التحريم' },
    { number: 67, name: 'الملك' },
    { number: 68, name: 'القلم' },
    { number: 69, name: 'الحاقة' },
    { number: 70, name: 'المعارج' },
    { number: 71, name: 'نوح' },
    { number: 72, name: 'الجن' },
    { number: 73, name: 'المزمل' },
    { number: 74, name: 'المدثر' },
    { number: 75, name: 'القيامة' },
    { number: 76, name: 'الإنسان' },
    { number: 77, name: 'المرسلات' },
    { number: 78, name: 'النبأ' },
    { number: 79, name: 'النازعات' },
    { number: 80, name: 'عبس' },
    { number: 81, name: 'التكوير' },
    { number: 82, name: 'الانفطار' },
    { number: 83, name: 'المطففين' },
    { number: 84, name: 'الانشقاق' },
    { number: 85, name: 'البروج' },
    { number: 86, name: 'الطارق' },
    { number: 87, name: 'الأعلى' },
    { number: 88, name: 'الغاشية' },
    { number: 89, name: 'الفجر' },
    { number: 90, name: 'البلد' },
    { number: 91, name: 'الشمس' },
    { number: 92, name: 'الليل' },
    { number: 93, name: 'الضحى' },
    { number: 94, name: 'الشرح' },
    { number: 95, name: 'التين' },
    { number: 96, name: 'العلق' },
    { number: 97, name: 'القدر' },
    { number: 98, name: 'البينة' },
    { number: 99, name: 'الزلزلة' },
    { number: 100, name: 'العاديات' },
    { number: 101, name: 'القارعة' },
    { number: 102, name: 'التكاثر' },
    { number: 103, name: 'العصر' },
    { number: 104, name: 'الهمزة' },
    { number: 105, name: 'الفيل' },
    { number: 106, name: 'قريش' },
    { number: 107, name: 'الماعون' },
    { number: 108, name: 'الكوثر' },
    { number: 109, name: 'الكافرون' },
    { number: 110, name: 'النصر' },
    { number: 111, name: 'المسد' },
    { number: 112, name: 'الإخلاص' },
    { number: 113, name: 'الفلق' },
    { number: 114, name: 'الناس' }
  ];

  selectedSheikh: string = '';
  startSura: number = 1;
  startAyah: number = 1;
  endSura: number = 1;
  endAyah: number = 1;
  currentAyah: number = 1;
  currentSura: number = 1;
  isPlaying: boolean = false;
  audioQueue: string[] = [];
  currentAudioIndex: number = 0;
  repetitionCount: number = 1;
  currentRepetition: number = 0;
  repeatOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  currentAudio: HTMLAudioElement | null = null;
  infiniteLoop: boolean = false;

  constructor(private http: HttpClient) {
    console.log("EhfazComponent constructor called");
    window.console.log("Direct console.log from EhfazComponent constructor");
  }

  ngOnInit() {
    console.log("EhfazComponent ngOnInit called");
    // Add a direct console.log to see if it's being called
    window.console.log("Direct console.log from EhfazComponent ngOnInit");
    
    // Initialize with default values
    this.selectedSheikh = this.sheikhs[0].value;
    console.log("Default sheikh selected:", this.selectedSheikh);

    console.log("getSurahRange called");
    this.endSura = this.startSura;
    this.endAyah = this.startAyah;
  }

  ngAfterViewInit() {
    console.log("EhfazComponent ngAfterViewInit called");
  }

  ngOnDestroy() {
    console.log("EhfazComponent ngOnDestroy called");
  }

  getAudioUrl(sura: number, ayah: number): string {
    const suraStr = sura.toString().padStart(3, '0');
    const ayahStr = ayah.toString().padStart(3, '0');
    const url = `http://everyayah.com/data/${this.selectedSheikh}/${suraStr}${ayahStr}.mp3`;
    console.log("Generated audio URL:", url);
    return url;
  }

  getImageUrl(sura: number, ayah: number): string {
    return `http://everyayah.com/data/images_png/${sura}_${ayah}.png`;
  }

  prepareAudioQueue() {
    this.audioQueue = [];
    let currentSura = this.startSura;
    let currentAyah = this.startAyah;

    while (currentSura < this.endSura || (currentSura === this.endSura && currentAyah <= this.endAyah)) {
      const audioUrl = this.getAudioUrl(currentSura, currentAyah);
      this.audioQueue.push(audioUrl);

      currentAyah++;
      if (currentAyah > this.getSuraAyahCount(currentSura)) {
        currentSura++;
        currentAyah = 1;
      }
    }
  }

  getSuraAyahCount(sura: number): number {
    // This is a simplified version. You should implement the actual ayah count for each sura
    const ayahCounts = [
      7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
    ];
    return ayahCounts[sura - 1] || 0;
  }

  playAudio() {
    if (this.isPlaying) return;
    
    this.prepareAudioQueue();
    this.currentAudioIndex = 0;
    this.currentRepetition = 0;
    
    if (this.audioQueue.length === 0) {
      console.log('No audio files to play');
      return;
    }
    
    this.isPlaying = true;
    this.playNextAudio();
  }

  playNextAudio() {
    if (!this.isPlaying || this.currentAudioIndex >= this.audioQueue.length) {
      if (this.infiniteLoop) {
        // If infinite loop is enabled, just reset the index and continue
        this.currentAudioIndex = 0;
        this.playNextAudio();
      } else if (this.currentRepetition < this.repetitionCount - 1) {
        // Start next repetition
        this.currentRepetition++;
        this.currentAudioIndex = 0;
        this.playNextAudio();
      } else {
        // All repetitions completed
        this.isPlaying = false;
        this.currentRepetition = 0;
        this.currentAudioIndex = 0;
      }
      return;
    }

    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }

    this.currentAudio = new Audio(this.audioQueue[this.currentAudioIndex]);
    
    // Add error handling
    this.currentAudio.onerror = (e) => {
      console.error('Error loading audio:', e);
      // Skip to next audio on error
      this.currentAudioIndex++;
      this.playNextAudio();
    };
    
    // Add loading handling
    this.currentAudio.oncanplaythrough = () => {
      console.log('Audio loaded and ready to play');
    };
    
    this.currentAudio.onended = () => {
      this.currentAudioIndex++;
      this.playNextAudio();
    };
    
    // Use a promise to handle play() which may return a promise in modern browsers
    const playPromise = this.currentAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Error playing audio:', error);
        // Skip to next audio on error
        this.currentAudioIndex++;
        this.playNextAudio();
      });
    }
  }

  stopAudio() {
    this.isPlaying = false;
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    this.currentRepetition = 0;
    this.currentAudioIndex = 0;
  }

  getSurahRange(): number[] {
    return Array.from({length: 114}, (_, i) => i + 1);
  }

  getSurahName(surahNumber: number): string {
    const surah = this.surahs.find(s => s.number === surahNumber);
    return surah ? surah.name : surahNumber.toString();
  }

  getAyahRange(sura: number): number[] {
    console.log("getAyahRange called with sura:", sura);
    const ayahCount = this.getSuraAyahCount(sura);
    console.log("Ayah count for sura", sura, "is:", ayahCount);
    const range = Array.from({length: ayahCount}, (_, i) => i + 1);
    console.log("Ayah Range:", range);
    return range;
  }

  // Get available end Suras based on start Sura
  getAvailableEndSuras(): Sura[] {
    return this.surahs.filter(surah => surah.number >= this.startSura);
  }

  // Get available start Ayahs based on start Sura
  getAvailableStartAyahs(): number[] {
    return Array.from({length: this.getSuraAyahCount(this.startSura)}, (_, i) => i + 1);
  }

  // Handle start Ayah change
  onStartAyahChange() {
    // If same Sura, ensure end Ayah is not before start Ayah
    if (this.startSura === this.endSura) {
      // If end Ayah is less than start Ayah, set it to start Ayah
      if (this.endAyah < this.startAyah) {
        this.endAyah = this.startAyah;
      }
      
      // If end Ayah is beyond the Sura's Ayah count, set it to the last Ayah
      const maxAyah = this.getSuraAyahCount(this.endSura);
      if (this.endAyah > maxAyah) {
        this.endAyah = maxAyah;
      }
    }
    
    // Force update of the end Ayah dropdown
    this.updateEndAyahOptions();
  }
  
  // Force update of the end Ayah dropdown
  updateEndAyahOptions() {
    // This is a workaround to force Angular to update the end Ayah dropdown
    // We temporarily change the end Ayah value and then change it back
    const tempEndAyah = this.endAyah;
    this.endAyah = 0;
    setTimeout(() => {
      this.endAyah = tempEndAyah;
    }, 0);
  }

  // Get available end Ayahs based on selected Suras
  getAvailableEndAyahs(): number[] {
    if (this.startSura === this.endSura) {
      // If same Sura, only show Ayahs from start Ayah to end
      const maxAyah = this.getSuraAyahCount(this.endSura);
      const ayahs = [];
      for (let i = this.startAyah; i <= maxAyah; i++) {
        ayahs.push(i);
      }
      return ayahs;
    } else {
      // If different Sura, show all Ayahs of the end Sura
      const ayahs = [];
      for (let i = 1; i <= this.getSuraAyahCount(this.endSura); i++) {
        ayahs.push(i);
      }
      return ayahs;
    }
  }

  // Handle start Sura change
  onStartSuraChange() {
    // Reset end Sura if it's before start Sura
    if (this.endSura < this.startSura) {
      this.endSura = this.startSura;
    }
    // Reset start Ayah if it's beyond the Sura's Ayah count
    const maxAyah = this.getSuraAyahCount(this.startSura);
    if (this.startAyah > maxAyah) {
      this.startAyah = 1;
    }
    
    // Reset end Ayah if it's beyond the end Sura's Ayah count
    const endMaxAyah = this.getSuraAyahCount(this.endSura);
    if (this.endAyah > endMaxAyah) {
      this.endAyah = 1;
    }
    
    // If same Sura, ensure end Ayah is not before start Ayah
    if (this.startSura === this.endSura && this.endAyah < this.startAyah) {
      this.endAyah = this.startAyah;
    }
    
    // Force update of the end Ayah dropdown
    this.updateEndAyahOptions();
  }

  // Handle end Sura change
  onEndSuraChange() {
    // Reset end Ayah if it's beyond the Sura's Ayah count
    const maxAyah = this.getSuraAyahCount(this.endSura);
    if (this.endAyah > maxAyah) {
      this.endAyah = 1;
    }
    
    // If same Sura, ensure end Ayah is not before start Ayah
    if (this.startSura === this.endSura && this.endAyah < this.startAyah) {
      this.endAyah = this.startAyah;
    }
    
    // Force update of the end Ayah dropdown
    this.updateEndAyahOptions();
  }

  // Handle sheikh change
  onSheikhChange() {
    console.log("Sheikh changed to:", this.selectedSheikh);
    // If audio is playing, stop it
    if (this.isPlaying) {
      this.stopAudio();
    }
    // Clear the audio queue
    this.audioQueue = [];
    this.currentAudioIndex = 0;
  }
}
