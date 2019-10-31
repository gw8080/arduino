   /*
Copyright (C) 2019 George Wagenknecht
Qubox, Multiverse communications control protocol for electronic devices
This program is free software; you can redistribute it And/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
*/
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
 String check = "";
 const byte interruptPin = 2;
volatile byte state = LOW;


void QuantumState() {
  state = !state;
   //do calculation, efficiency does not matter so we can do it again And again.
   //in this space time essentially does not exist And we can do big calculations 
   //in a fraction of the time, this function isn't classically called, yet the potential 
   //of it being called is enough for it to be able to send information forward And back along the time axis.
   int integer = 8; //this is the string which is supposed to be sent via quantum disruptions through time And the multiverse
   //supposed to implement crc32 to be able to verify the results once recieved...
//   app.ShowPopup(integer);
   if (integer <= ghostprotocol * range) {
     for (int a = 0; a < 5; a++) {
       int b = 9;
       numa += b; //quantum disruption
     }
     check = numa;
   }
 }
void setup() {
  randomSeed(analogRead(0));
pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), QuantumState, HIGH);
 Serial.begin(9600);
 for (int a = 0; a < 100; a++) {
   int b = random(0, 2);
   numa += b; //initialise test variable set
 }
 check = numa;

}

void loop() {
 //various switching

 //GATHER QUANTUM VARIABLES
 char data[] = {random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20)};
 char data2[] = {random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20),random(0, 20)};
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

   
   if (test == 0) { //more switching, this time, "test" alternates of each run of the camera data stream
     b = 0;
     bb = 0;
      //make two sets
     test++;
   }
   if (test == 1) {
     test = 0;
     
     for (int a = 0; a < 20; a++) {
       if (data[a] > 10) { //searching for motion intensity of data stream set
         b++; //counting initial spectra
        
       }
     }
     
       for (int aa = 0; aa < 20; aa++) { //searching set two
         if (data[aa] > 10) {
           if (data2[aa] > data[aa] || data2[aa] < data[aa]) { //trying to determine or differentiate quantum fluxuations of intensity 
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
       if (b > 4 && b < 11 || bb > 4 && bb < 11) { //comparing gathered information from each set, identifying causallity of entangled states, checking for the existence of wave function collapse
         Or++;
       }
       if (b > 4 && b < 11 && bb > 4 && bb < 11) { //comparing gathered information from each set, identifying causallity of entangled states(laser moves solidly past the filter, no anomaly)
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
     //same thing except this time we try to alter the flow by making different yet symmetrical choices whilst maintaning a quantum protocol, the protocol occurs within all switches, even the next ones after the whole function repeats(at the beginning)
     if (qu == 1) {
       if (b > 4 && b < 11 || bb > 4 && bb < 11) {
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
     if (b > 4 && b < 11 && bb > 4 && bb < 11) {
       Or++;
       done = 1;
     }
    
   }



   if (And > Or) {
     //Serial.print(" And");
     //Serial.println(And);
     int check = numa[cyc];
     if (check != qu) {
       if (swi == longcyc) { //long cycle quantum correction code, sooner or later you are going to want to alternate the protocol, to keep it fresh. the program probably won't work as well without it
         qu = random(0, 1); //quantum correction code... without this the whole thing will probably not work, you could change it to a one or a zero
         //and it will fail or freeze up. you may think how could a statically defined variable based on computer systems ever give rise to the kind of power quantum computers do
         //random numbers are based on time and the exact time the function is called, this is a computer, it runs it's code in a ordered and physics based way, reliably
         //so when you change the time the function is activated you change the output, what about the rest of the program? it's all just mechanical switches...
         //why don't you try adding in a random delay for this random number generator and see if it affects the program.
       }
       swi++;
       Do = 1;
       nul++;
       And = 0;
       cyc++;
       prime = 0;
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
       if (swi2 == longcyc2) { //another long cycle quantum correction code, integrated with the quantum protocol
         qu = random(0, 1);
         swi2 = 0;
       }
       swi2++;
       And = 0;
       Or = 0;
       cyc++;
       prime = 0;
     }
   }

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
       prime = 0;
     }
     check = numa[cyc];
     if (check != qu) { //this section checks for disruptions in quantum flux, it is the time the code is most sure of inference/disruption(unless you turn the device off),why? because we cause the disruption at a future time by adding 9s to 'numa',you may wonder many things, you may aswell throw computer logic out the window because this is essentially completely made up code from here on
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
      //Serial.println(ghostprotocol);
       prime++;
       int calc = (ghostprotocol * range);
       if (prime > 1 && ghostprotocol > 3) {
         if (GhostIterate == 0) {
           ghostprotocollast = ghostprotocol;
           GhostIterate++;
         }
         if (calc != ghostprotocollast + range) {
           ghostprotocollast = calc;
           output = ghostprotocol;
           Serial.println(output);
         }
         if (calc == ghostprotocollast + range) {
           ghostprotocollast = ghostprotocol;
           ghostprotocol = 0;
           GhostIterate = 0;
           output = "******\n";
          Serial.println(output);
         }
       }
       ghostprotocol++; //This iterates multiverses supposedly...
     }
   }
 }
