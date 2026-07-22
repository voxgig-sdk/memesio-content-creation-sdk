<?php
declare(strict_types=1);

// MemesioContentCreation SDK base feature

class MemesioContentCreationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MemesioContentCreationContext $ctx, array $options): void {}
    public function PostConstruct(MemesioContentCreationContext $ctx): void {}
    public function PostConstructEntity(MemesioContentCreationContext $ctx): void {}
    public function SetData(MemesioContentCreationContext $ctx): void {}
    public function GetData(MemesioContentCreationContext $ctx): void {}
    public function GetMatch(MemesioContentCreationContext $ctx): void {}
    public function SetMatch(MemesioContentCreationContext $ctx): void {}
    public function PrePoint(MemesioContentCreationContext $ctx): void {}
    public function PreSpec(MemesioContentCreationContext $ctx): void {}
    public function PreRequest(MemesioContentCreationContext $ctx): void {}
    public function PreResponse(MemesioContentCreationContext $ctx): void {}
    public function PreResult(MemesioContentCreationContext $ctx): void {}
    public function PreDone(MemesioContentCreationContext $ctx): void {}
    public function PreUnexpected(MemesioContentCreationContext $ctx): void {}
}
