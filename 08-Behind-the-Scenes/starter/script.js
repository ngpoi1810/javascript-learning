'use strict';
/*Engine and Runtime----------------------------------------
- Compilation và Interpretation
+ Compilation: Tất cả source code sẽ được convert thành mã máy một lần và sau đó mã máy sẽ được
viết trong một portable file để có thể thực thi trên bất kỳ máy nào
+ Interpretation: Có một thông dịch chạy qua mã nguồn sau đó sẽ thực thi nó line by line
- Trước đây JS dùng Interpretation language nhưng về sau thì performance chậm rất chậm hơn
Compilation language nên thay vì dùng simple Interpretation thì JS bây giờ mix Compilation
và Interpretation lại với nhau và được gọi là Just-in-time compilation (JIT)
* */
/*Execution context and The call stack------------------------------
- Thì sau khi compile xong và code chuẩn bị được thực thi
Và sau đó cái được gọi là global execution context được tạo ra (for top-level code).
Thì top-level code thì về cơ bản là code mà không nằm trong bất kỳ function nào
- Execution Context là một khái niệm trừu tượng nên giải thích một cách cơ bản nhất
thì nó như là một môi trường trong đó đoạn JS được thực thi. Nó giống như một cái hộp lưu trữ
tất cả thông tin cần thiết cho một số mã được thực thi và JS code luôn chạy bên trong một
execution context
- Hãy làm điều này trực quan hơn một chút: Hãy thử tưởng tượng bạn order một cái pizza. Thường
thì pizza sẽ được giao đến bên trong một cái hộp và nó cũng có một số thứ cần thiết khác để bạn có
thể ăn được pizza chẳng hạn là dao kéo hoặc biên lai chẳng hạn để bạn trả tiền cho chiếc bánh pizza
trước khi ăn nó. Vậy ta hãy phân tích pizza là JS code sẽ được thực thi và chiếc hộp là execution
context cho chiếc bánh pizza. Và nĩa và hóa đơn là thứ cần thiết để ăn pizza hãy nói cách khác
là dùng thể thực thi code
- Execution context thuộc Arrow function thì không nhận được đối số và từ khóa 'this'
thay vào đó nó sẽ nhận đối số và từ khóa 'this' từ func cha gần nhất của chúng
- Call stack về cơ bản thì là nơi mà các execution context xếp chông lên nhau để mà theo dõi
nơi chúng thực hiện chương trình
*
* */

/*các primitive Type gồm có

*Number, String, Boolean, Underfined, Null, Symbol, BigInt

*/
/*
* Các Reference types gồm có
* - Object Literal
* - Arrays
* - Functions
* - Many more...
* */
/*
* Hai cái này có sự khác biệt nhau về nơi lưu trũ
* thì Engine có hai dạng là 'Call stack'(nơi mà các functions được thực thi) và 'Heap'(Nơi mà các object đuợc lưu trữ trong bộ nhớ'
* Và các object hoặc reference types khác sẽ được lưu trữ ngay trong Heap
* Mặc khác thì primitives hoặc primitive types sẽ được lưu trữ trong Call Stack
* */
/* Scope and Scope chain---------------------------------
*Lexical scoping nghĩa là cách mà mấy cái biến nó được tổ chức và được truy cập thì nó được kiểm soát hoàn toàn bởi vị trí của các function and của các block
* Một lần nữa là variables scoping chịu ảnh hưởng bởi nơi mà chúng ta viết trong function hoặc block
*
* Vậy Scope là gì? hiểu đơn giản scope chỉ là một space hoặc một environment cái mà chúng được lưu trữ trong function execution context
* Vậy bây giờ thì sự khác biệt giữa Scope và Varible environment là gì? Thì câu trả lời là tùy vào trường hợp của function nhưng về cơ bản là giống nhau
* Và bây giờ thì trong JS ta có:
* + Global scope: Được gọi ra bên ngoài bất kỳ function hoặc scope, biến được khai báo trong global scope có thể được truy cập bất kỳ đâu
* + Function scope: Các biến được khai báo bên trong function và chỉ có phạm vi truy cập trong function và bên ngoài function thì không thể truy cập được các biến này
* . Các biến này còn được gọi là local scope
* Lúc trước thì chỉ có function tạo ra scope trong JS nhưng giờ có ES6 nên blocks ({...}) cũng tạo ra scope nghĩa là mọi thứ bên trong dấu { } ví dụ như If{..}, for(){..}
* Và cũng giống như function thì các biến được khai báo bên trong block cũng chỉ được truy cập bên trong block đó ở bên ngoài thì không.
* Nhưng sự khác biệt lớn ở đây là chỉ áp dụng với biến được khai báo là let và const. Tại sao chúng ta lại nói let và const là block scope. Vì nếu ta khai báo một biến
* dùng var thì biến đó vẫn truy cập được bên ngoài block đó và sẽ là scope của function hiện tai hoặc global scope và vì vậy chúng ta nói rằng var là function scope
* Vì thế trong ES5  và trước kia nữa thì chúng ta chỉ có global và function scope thôi và đó là tại sao khai báo biến ở ES5 với var, chỉ quan tâm đến function scope mà không quan tâm đến blocks
* Và đơn giản là họ đã bỏ qua điều đó. Và bầy giờ ở ES6 tất cả function bây giờ cũng như block scope ít nhất là trong strict mode. Điều này nghĩa là  các function khai báo trong một block
* thì chỉ truy cập trong block đó
* Let và const là block scope còn var là function scope (quan trọng)
* Thứ tự các chức năng được gọi(call stack) không ảnh hưởng đến các chuỗi phạm vi(scope chain)
* + Block scope
*Sumary:
* - Có 3 loại scope: global, function, block
* - Chỉ const và let là block scope. Còn var sẽ tự động kết thúc trong phạm vi function scope gần nhất
* - Và mọi scope luôn có quyền truy cập tất cả các biến từ các phạm vi bên ngoài của nó và đây cũng là scope chain
* - Khi một biến không phải là current scope thì engine sẽ look up trong scope chain đến khi tìm thấy biến đó. Đây được gọi là Variable lookup
* - Điều quan trọng là thứ tự các function được gọi không ảnh hưởng gì đến scope chain
* */