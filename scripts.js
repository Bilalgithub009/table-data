function login() {
    // Basic login function to show the dashboard
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'block';
}

let presentCount = 0;
let absentCount = 0;
let leaveCount = 0;

function addStudent() {
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const rollNo = document.getElementById('rollNo').value;
    const age = document.getElementById('age').value;

    const table = document.getElementById('studentTable');
    const row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = fatherName;
    row.insertCell(2).innerText = rollNo;
    row.insertCell(3).innerText = age;

    const presentCell = row.insertCell(4);
    const absentCell = row.insertCell(5);
    const leaveCell = row.insertCell(6);

    presentCell.innerText = 'Present';
    absentCell.innerText = 'Absent';
    leaveCell.innerText = 'Leave';

    presentCell.addEventListener('click', () => updateStatus(row, 'present'));
    absentCell.addEventListener('click', () => updateStatus(row, 'absent'));
    leaveCell.addEventListener('click', () => updateStatus(row, 'leave'));

    row.dataset.status = ''; // Initial status

    document.getElementById('name').value = '';
    document.getElementById('fatherName').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('age').value = '';
}

function updateStatus(row, status) {
    const previousStatus = row.dataset.status;

    if (previousStatus === status) {
        return; // If the status is unchanged, do nothing
    }

    // Update the background color based on the status
    row.cells[4].style.backgroundColor = status === 'present' ? 'green' : '';
    row.cells[5].style.backgroundColor = status === 'absent' ? 'red' : '';
    row.cells[6].style.backgroundColor = status === 'leave' ? 'yellow' : '';
    row.cells[6].style.Color = status === 'leave' ? 'yellow' : '';


    // Update the counts
    if (previousStatus === 'present') {
        presentCount--;
        document.getElementById('presentCount').innerText = presentCount;
        
    } else if (previousStatus === 'absent') {
        absentCount--;
        document.getElementById('absentCount').innerText = absentCount;
    } else if (previousStatus === 'leave') {
        leaveCount--;
        document.getElementById('leaveCount').innerText = leaveCount;
    }

    if (status === 'present') {
        presentCount++;
        document.getElementById('presentCount').innerText = presentCount;
    } else if (status === 'absent') {
        absentCount++;
        document.getElementById('absentCount').innerText = absentCount;
    } else if (status === 'leave') {
        leaveCount++;
        document.getElementById('leaveCount').innerText = leaveCount;
    }

    // Update the status data attribute
    row.dataset.status = status;

    // Update the details section
    const name = row.cells[0].innerText;
    const fatherName = row.cells[1].innerText;
    const rollNo = row.cells[2].innerText;
    const age = row.cells[3].innerText;
    const details = `Name: ${name}, Father Name: ${fatherName}, Roll No: ${rollNo}, Age: ${age}`;

    
    if (status === 'present') {
        document.getElementById('presentDetails').innerText = details;
    } else{
        document.getElementById('presentDetails').innerText = "";
      
    }
    
     if (status === 'absent') {
        document.getElementById('absentDetails').innerText = details;
    }else{
        document.getElementById('absentDetails').innerText = "";
    }
    
     if (status === 'leave') {
        document.getElementById('leaveDetails').innerText = details;
    }else{
        document.getElementById('leaveDetails').innerText = "";
    }
}



