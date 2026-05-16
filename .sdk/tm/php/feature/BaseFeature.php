<?php
declare(strict_types=1);

// SodeomSearch SDK base feature

class SodeomSearchBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SodeomSearchContext $ctx, array $options): void {}
    public function PostConstruct(SodeomSearchContext $ctx): void {}
    public function PostConstructEntity(SodeomSearchContext $ctx): void {}
    public function SetData(SodeomSearchContext $ctx): void {}
    public function GetData(SodeomSearchContext $ctx): void {}
    public function GetMatch(SodeomSearchContext $ctx): void {}
    public function SetMatch(SodeomSearchContext $ctx): void {}
    public function PrePoint(SodeomSearchContext $ctx): void {}
    public function PreSpec(SodeomSearchContext $ctx): void {}
    public function PreRequest(SodeomSearchContext $ctx): void {}
    public function PreResponse(SodeomSearchContext $ctx): void {}
    public function PreResult(SodeomSearchContext $ctx): void {}
    public function PreDone(SodeomSearchContext $ctx): void {}
    public function PreUnexpected(SodeomSearchContext $ctx): void {}
}
