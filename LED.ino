#define LED_PIN_1 9
#define LED_PIN_2 10
#define LED_PIN_3 11
#define LED_PIN_4 12

int step_number = 0;

void setup() {
pinMode(LED_PIN_1, OUTPUT);
pinMode(LED_PIN_2, OUTPUT);
pinMode(LED_PIN_3, OUTPUT);
pinMode(LED_PIN_4, OUTPUT);
}
void loop() {
  switch(step_number){
  case 0:
  digitalWrite(LED_PIN_1, HIGH);
  digitalWrite(LED_PIN_2, LOW);
  digitalWrite(LED_PIN_3, LOW);
  digitalWrite(LED_PIN_4, LOW);
  break;
  case 1:
  digitalWrite(LED_PIN_1, LOW);
  digitalWrite(LED_PIN_2, HIGH);
  digitalWrite(LED_PIN_3, LOW);
  digitalWrite(LED_PIN_4, LOW);
  break;
  case 2:
  digitalWrite(LED_PIN_1, LOW);
  digitalWrite(LED_PIN_2, LOW);
  digitalWrite(LED_PIN_3, HIGH);
  digitalWrite(LED_PIN_4, LOW);
  break;
  case 3:
  digitalWrite(LED_PIN_1, LOW);
  digitalWrite(LED_PIN_2, LOW);
  digitalWrite(LED_PIN_3, LOW);
  digitalWrite(LED_PIN_4, HIGH);
  break;
  }
  step_number++;
  if(step_number > 3){
    step_number = 0;
  }
  delay(70);
  }
