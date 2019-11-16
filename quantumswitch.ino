
 int swi = 0;
 int swi2 = 0;
 int longcyc = 2;
 int longcyc2 = 3; //+1 or 2
 int corr = 0; //batch count
 int Do = 0;
 int Do2 = 0;
 int it = 0;
 int test = 0;
 int nul = 0;
 int ack = 0;
 int And = 0;
 int Or = 0;
 int b = 0;
 int bb = 0;
 int cyc = 0;
 int cycle = 0;
 int done = 0;
 String numa = "";
 int qu = 0;
 int rangeorig = 1;
 int range = rangeorig;
 int ghostprotocol = 0;
 int prime = 0;
 String output = "";
 int ghostprotocollast = 0;
 int GhostIterate = 0;
 const byte interruptPin = 2;
volatile byte state = LOW;
int integer = 8;
bool Toggle = true;



void QuantumState() {
  int it = 0;
  if (Toggle == true && it == 0) {
       Toggle = false;
       it++;
     }
     if (Toggle == false && it == 0) {
       Toggle = true;
       it++;
     }
     it = 0;
   //do calculation, efficiency does not matter so we can do it again And again.
   //in this space time essentially does not exist And we can do big calculations 
   //in a fraction of the time, this function isn't classically called, yet the potential 
   //of it being called is enough for it to be able to send information forward And back along the time axis.
   //this is the string which is supposed to be sent via quantum disruptions through time And the multiverse
   //supposed to implement crc32 to be able to verify the results once recieved...

   
 }
void setup() {
   randomSeed(analogRead(0));
pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), QuantumState, HIGH);
 Serial.begin(9600);
 for (int a = 0; a < 1000; a++) {
   int b = random(0, 2);
   numa += b; //initialise test variable set
 }
 String check = numa;
// Serial.println("Qubox C#, Arduino, Copyright 2019 George Wagenknecht");
 
}

void loop() {
 //various switching

 //GATHER QUANTUM VARIABLES
 int data[] = {random(0, 20),random(0, 20)}; 
 int data2[] = {random(0, 20),random(0, 20)}; // I wonder if this is too little amount of ldr's
  
 
   
   if (Do == 1) { 
     Do2 = 1;
     if (qu == 1 && it == 0) {
       qu = 0;
       it++;
     }
     if (qu == 0 && it == 0) {
       qu = 1;
       it++;
     }
     it = 0;
   }
 //more switching, this time, "test" alternates of each run of the camera data stream
    

     for (int a = 0; a < 2; a++) {
       if (data[a] > 10) { //searching for motion intensity of data stream set
         b++; //counting initial spectra
        
       }
     }
     
       for (int aa = 0; aa < 2; aa++) { //searching set two
         if (data[aa] > 10) {
           if (data2[aa] > data[aa] || data2[aa] < data[aa]) { 
             bb++; //counting them
            
           }
         }
       }
       //  Serial.print(b);
      //   Serial.print(" ");
      //   Serial.print(bb);
    // Serial.print(" test");

     //^^^^ work on it...
   
     if (qu == 0) {
       if (b > 1 && b < 11 || bb > 1 && bb < 11) { 
         Or++;
       }
       if (b > 1 && b < 11 && bb > 1 && bb < 11) { 
         And++;
         if (Do == 1) {
           if (qu == 1 && it == 0) {
             qu = 0;
             it++;
           }
           if (qu == 0 && it == 0) {
             qu = 1;
             it++;
           }
           it = 0;
         }
         done = 1;
       }
     }
     if (qu == 1) {
       if (b > 1 && b < 11 || bb > 1 && bb < 11) {
         if (Do2 == 1) {
           if (qu == 1 && it == 0) {
             qu = 0;
             it++;
           }
           if (qu == 0 && it == 0) {
             qu = 1;
             Do2 = 0;
             it++;
           }
           it = 0;
           And++;
         }
       }
     }
     if (b > 1 && b < 11 && bb > 1 && bb < 11) {
       Or++;
       done = 1;
     }
    

     b = 0;
     bb = 0;
if (Toggle == true){
   if (And > Or) {
     //Serial.print(" And");
     //Serial.println(And);
     int check = numa[cyc];
     if (check != qu) {
       if (swi == longcyc) { 
         qu = random(0, 1); 
         }
       swi++;
       Do = 1;
       nul++;
       And = 0;
       cyc++;
       Serial.println("0");
     }
     //most of the time it knows the number before it matches...
     check = numa[cyc];
     if (check== qu) {
       ack++;
       if (qu == 1 && it == 0) {
         qu = 0;
         it++;
       }
       if (qu == 0 && it == 0) {
         qu = 1;
         it++;
       }
       it = 0;
       if (swi2 == longcyc2) { 
         qu = random(0, 1);
         swi2 = 0;
       }
       swi2++;
       And = 0;
       Or = 0;
       cyc++;
       Serial.println("0");
     }
   }
}
if (Toggle == true){
   if (Or > And) {
      
//Serial.print(" Or");
//Serial.println(Or);
     int check = numa[cyc];
     
     //most of the time it knows the number before it matches...
     if (check == qu) {
       ack++;
       if (qu == 1 && it == 0) {
         qu = 0;
         it++;
       }
       if (qu == 0 && it == 0) {
         qu = 1;
         it++;
       }
       it = 0;
       if (swi2 == longcyc2) {
         qu = random(0, 1);
         it = 0;
         swi2 = 0;
       }
       swi2++;
       Or = 0;
       cyc++;
       Serial.println("0");
     }
     check = numa[cyc];
     if (check != qu) { 
       if (swi == longcyc) {
         qu = random(0, 1);
         swi = 0;
       }
       swi++;
       Do = 1;
       nul++;
       Or = 0;
       And = 0;
       cyc++;
      Serial.println("1");
     }
   }
 }
}
