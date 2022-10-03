<?php

namespace CT275\Lab3;

class Contact
{
    protected $id = -1;
    public $name;
    public $phone;
    public $notes;
    public $created_at;
    public $updated_at;
    protected $errors = [];

    public function getId()
    {
        return $this->id;
    }

    public function __construct(array $data = [])
    {
        $this->fill($data);
    }

    public function fill(array $data)
    {
        if (isset($data['name'])) {
            $this->name = filter_var(trim($data['name']), FILTER_SANITIZE_STRING);
        }

        if (isset($data['phone'])) {
            $this->phone = preg_replace('/[^0-9]+/', '', $data['phone']);
        }

        if (isset($data['notes'])) {
            $this->notes = filter_var(trim($data['notes']), FILTER_SANITIZE_STRING);
        }

        return $this;
    }

    public function getValidationErrors()
    {
        return $this->errors;
    }

    public function validate()
    {
        if (!$this->name) {
            $this->errors['name'] = 'Invalid name.';
        }

        if (strlen($this->phone) < 10 || strlen($this->phone) > 11) {
            $this->errors['phone'] = 'Invalid phone number.';
        }

        if (strlen($this->notes) > 255) {
            $this->errors['notes'] = 'Notes must be at most 255 characters.';
        }

        return empty($this->errors);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'notes' => $this->notes,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
