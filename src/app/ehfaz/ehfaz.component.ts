import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
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
  templateUrl: './ehfaz.component.html',
  styleUrls: ['./ehfaz.component.css'],
  standalone: false
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
  currentSuraName: string = '';
  preloadedAudios: HTMLAudioElement[] = [];
  preloadedImages: HTMLImageElement[] = [];
  preloadCount: number = 3;
  currentYear = new Date().getFullYear();

  // Add properties for audio concatenation
  private nextAudio: HTMLAudioElement | null = null;
  private isPreloading: boolean = false;
  private audioEndedHandler: (() => void) | null = null;
  private audioErrorHandler: ((error: Event) => void) | null = null;

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
    this.startSura = 1;
    this.startAyah = 1;
    this.endSura = 1;
    this.endAyah = 1;
    this.currentSura = 1;
    this.currentAyah = 1;
    this.currentSuraName = this.getSurahName(this.currentSura);
    
    console.log("Default sheikh selected:", this.selectedSheikh);
    console.log("Initial sura:", this.currentSura);
    console.log("Initial sura name:", this.currentSuraName);
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

    console.log("Starting to prepare queue from Sura", currentSura, "Ayah", currentAyah, 
                "to Sura", this.endSura, "Ayah", this.endAyah);

    // Continue until we reach the end sura and end ayah
    while (true) {
      // Add current ayah to queue
      const audioUrl = this.getAudioUrl(currentSura, currentAyah);
      this.audioQueue.push(audioUrl);
      console.log(`Added to queue: Sura ${currentSura} Ayah ${currentAyah}`);

      // Check if we've reached the end
      if (currentSura == this.endSura && currentAyah == this.endAyah) {
        break;
      }

      // Move to next ayah
      currentAyah++;

      // If we've reached the end of current sura
      if (currentAyah > this.getSuraAyahCount(currentSura)) {
        currentSura++;
        currentAyah = 1;
        console.log(`Moving to next sura: ${currentSura}`);

        if (currentSura > this.endSura) {
          break;
        }
      }
    }

    console.log(`Audio queue prepared with ${this.audioQueue.length} items`);
  }

  playAudio() {
    if (this.isPlaying) {
      return;
    }

    console.log(`Starting playback from Sura ${this.startSura} Ayah ${this.startAyah} to Sura ${this.endSura} Ayah ${this.endAyah}`);
    
    // Reset the audio queue and prepare it with all ayahs from start to end
    this.prepareAudioQueue();
    
    // Reset playback state
    this.currentAudioIndex = 0;
    this.currentRepetition = 0;
    this.currentSura = this.startSura;
    this.currentAyah = this.startAyah;
    this.currentSuraName = this.getSurahName(this.currentSura);
    this.isPlaying = true;
    
    console.log(`Queue prepared. Starting playback with ${this.audioQueue.length} items`);
    
    // Start playing
    this.playNextAudio();
  }

  playNextAudio() {
    if (!this.isPlaying) {
      return;
    }

    if (this.currentAudioIndex >= this.audioQueue.length) {
      this.currentRepetition++;
      
      if (this.infiniteLoop || this.currentRepetition < this.repetitionCount) {
        this.prepareAudioQueue();
        this.currentAudioIndex = 0;
        this.currentSura = this.startSura;
        this.currentAyah = this.startAyah;
        this.currentSuraName = this.getSurahName(this.currentSura);
        console.log("Restarting playback with sura:", this.currentSura, "ayah:", this.currentAyah);
        this.playNextAudio();
      } else {
        this.stopAudio();
      }
      return;
    }

    // Calculate current sura and ayah based on the audio index
    let tempSura = this.startSura;
    let tempAyah = this.startAyah;
    let remainingIndex = this.currentAudioIndex;

    while (remainingIndex > 0) {
      tempAyah++;
      if (tempAyah > this.getSuraAyahCount(tempSura)) {
        tempSura++;
        tempAyah = 1;
      }
      remainingIndex--;
    }

    this.currentSura = tempSura;
    this.currentAyah = tempAyah;
    this.currentSuraName = this.getSurahName(this.currentSura);

    if (this.currentSura === this.endSura && this.currentAyah > this.endAyah) {
      console.log("Reached end sura and ayah, stopping playback");
      this.stopAudio();
      return;
    }

    const audioUrl = this.audioQueue[this.currentAudioIndex];
    console.log("Playing audio:", audioUrl);
    console.log("Current Sura:", this.currentSura, "Current Ayah:", this.currentAyah);
    console.log("Current Sura Name:", this.currentSuraName);
    console.log("Audio index:", this.currentAudioIndex, "of", this.audioQueue.length);

    // Create a new audio element
    this.currentAudio = new Audio(audioUrl);
    
    // Remove any existing event listeners
    if (this.audioEndedHandler) {
      this.currentAudio.removeEventListener('ended', this.audioEndedHandler);
    }
    if (this.audioErrorHandler) {
      this.currentAudio.removeEventListener('error', this.audioErrorHandler);
    }
    
    // Add event listeners
    this.audioEndedHandler = () => {
      this.currentAudioIndex++;
      
      // Check if we've reached the end of a sura
      if (this.currentAyah >= this.getSuraAyahCount(this.currentSura)) {
        console.log("Reached end of sura:", this.currentSura);
        
        if (this.currentSura < this.endSura) {
          console.log("Continuing to next sura:", this.currentSura + 1);
          this.currentSura++;
          this.currentAyah = 1;
          this.currentSuraName = this.getSurahName(this.currentSura);
        }
      } else {
        this.currentAyah++;
      }
      
      if (this.currentSura === this.endSura && this.currentAyah > this.endAyah) {
        console.log("Reached end sura and ayah, stopping playback");
        this.stopAudio();
        return;
      }
      
      // Preload the next audio
      this.preloadNextAudio();
      
      // Start playing the next audio immediately
      this.playNextAudio();
    };
    
    this.audioErrorHandler = (error) => {
      console.error("Error playing audio:", error);
      this.currentAudioIndex++;
      this.preloadNextAudio();
      this.playNextAudio();
    };
    
    this.currentAudio.addEventListener('ended', this.audioEndedHandler);
    this.currentAudio.addEventListener('error', this.audioErrorHandler);

    // Preload the next audio
    this.preloadNextAudio();

    // Play the audio
    this.currentAudio.play().catch(error => {
      console.error("Error playing audio:", error);
      this.currentAudioIndex++;
      this.preloadNextAudio();
      this.playNextAudio();
    });
  }

  preloadNextAudio() {
    if (this.isPreloading || this.currentAudioIndex + 1 >= this.audioQueue.length) {
      return;
    }

    this.isPreloading = true;
    const nextAudioUrl = this.audioQueue[this.currentAudioIndex + 1];
    
    // Create and preload the next audio
    this.nextAudio = new Audio();
    this.nextAudio.preload = 'auto';
    
    this.nextAudio.addEventListener('canplaythrough', () => {
      console.log("Next audio preloaded:", nextAudioUrl);
      this.isPreloading = false;
    }, { once: true });
    
    this.nextAudio.addEventListener('error', (error) => {
      console.error("Error preloading next audio:", error);
      this.isPreloading = false;
    }, { once: true });
    
    this.nextAudio.src = nextAudioUrl;
  }

  stopAudio() {
    this.isPlaying = false;
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    if (this.nextAudio) {
      this.nextAudio.pause();
      this.nextAudio = null;
    }
    this.isPreloading = false;
  }

  getSuraAyahCount(sura: number): number {
    // This is a simplified version. You should implement the actual ayah count for each sura
    const ayahCounts = [
      7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
    ];
    return ayahCounts[sura - 1] || 0;
  }

  getAvailableStartAyahs(): number[] {
    const ayahCount = this.getSuraAyahCount(this.startSura);
    return Array.from({ length: ayahCount }, (_, i) => i + 1);
  }

  getAvailableEndSuras(): Sura[] {
    return this.surahs.filter(surah => surah.number >= this.startSura);
  }

  getAvailableEndAyahs(): number[] {
    if (this.startSura === this.endSura) {
      return Array.from({ length: this.getSuraAyahCount(this.endSura) }, (_, i) => i + 1)
        .filter(ayah => ayah >= this.startAyah);
    }
    return Array.from({ length: this.getSuraAyahCount(this.endSura) }, (_, i) => i + 1);
  }

  onSheikhChange() {
    console.log("Sheikh changed to:", this.selectedSheikh);
  }

  onStartSuraChange() {
    console.log("Start Sura changed to:", this.startSura);
    this.startAyah = 1;
    
    // Directly update currentSura and currentAyah
    this.currentSura = this.startSura;
    this.currentAyah = this.startAyah;
    
    // Update the current sura name
    this.currentSuraName = this.getSurahName(this.currentSura);
    console.log("Current sura name:", this.currentSuraName);
    
    if (this.endSura < this.startSura) {
      this.endSura = this.startSura;
      this.endAyah = this.startAyah;
    }
  }

  onStartAyahChange() {
    console.log("Start Ayah changed to:", this.startAyah);
    this.currentAyah = this.startAyah;
    if (this.startSura === this.endSura && this.endAyah < this.startAyah) {
      this.endAyah = this.startAyah;
    }
  }

  onEndSuraChange() {
    console.log("End Sura changed to:", this.endSura);
    this.endAyah = 1;
  }

  getSurahName(sura: number): string {
    if (!sura || !this.surahs) return '';
    console.log("Getting name for sura:", sura);
    console.log("Available surahs:", this.surahs.map(s => s.number + ": " + s.name).join(", "));
    const surah = this.surahs.find(s => s.number == sura);
    console.log("Found surah:", surah);
    return surah ? surah.name : '';
  }
} 